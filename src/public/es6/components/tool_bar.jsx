var React = require('react');
var ReactDOM = require('react-dom');
import {Tabs, Tab, ButtonGroup, Button} from 'react-bootstrap'
import {message} from 'antd'
import FileLoaderModal from './modals/fileLoaderModal'
import LayerModal from './modals/layerModal'
import ContourLineModal from './modals/contourLineModal'
import LayerSelectModal from './modals/layerSelectModal'
import DatLoader from '../libs/DatLoader'
import Delaunay from '../libs/Delaunay'
import Smooth from '../libs/smooth'
import ContourTrance from '../libs/conrec'
import defaultStyle from '../styles/default'
import TriSetting from './modals/triangleSetting'
import ContourSetting from './modals/contourSetting'



class DrawTool extends React.Component {

    state = {type: null, draw: null, editable: false, prevLayer: null, editLayer: null, layers: null};

    changeDrawType(type) {
        if (type == null) {
            this.setState({type: type});
            this.setMousePointer('pointer');
            if (this.state.draw != null) {
                this.getMap().map.removeInteraction(this.state.draw);
            }
            return;
        }
        if (!this.state.editLayer) {
            message.info('还没有选择任何图层!', 0.5);
            return;
        }
        this.setMousePointer('crosshair');
        this.setState({type: type});
        if (this.state.draw != null) {
            this.getMap().map.removeInteraction(this.state.draw);
        }
        let draw = this.getInteraction(type);
        if (draw) {
            this.setState({draw: draw});
            this.getMap().map.addInteraction(draw);
        }
    }

    handleStartModify() {
        if (this.state.editLayer != null) {
            this.setState({editLayer: null});
            this.setState({prevLayer: this.state.editLayer})
            this.getMap().editLayer = null;
            this.getMap().selectedFeatures.clear();
            if (this.state.draw) {
                this.getMap().map.removeInteraction(this.state.draw);
            }
            this.setMousePointer('pointer');
            return;
        }
        let map = this.getMap().map;
        let layers = map.getLayers();
        this.setState({layers : layers});
        this.refs.selectLayer.open((layer) => {
            if (this.state.prevLayer != layer) {
                this.getMap().history.clear();
            }
            this.setState({editLayer : layer});
            this.getMap().editLayer  = layer;
        });
    }

    componentDidMount() {
        this.setMousePointer('pointer');
    }

    getMap() {
        return this.props.map.refs.map;
    }

    getMapNode() {
        if (this.props.map.refs.map) {
            return this.props.map.refs.map.refs.mapDoc;
        }

    }

    setMousePointer(style = 'pointer') {
        let node = this.getMapNode();
        if (node) {
            node.style.cursor = style;
        }
    }

    getInteraction(value) {
        if (value != null) {
            if (value == 'null') {
                return null;
            }
            var geometryFunction, maxPoints;
            if (value == 'Square') {
                value = 'Circle';
                geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
            } else if (value == 'Box') {
                value = 'LineString';
                maxPoints = 2;
                geometryFunction = function (coordinates, geometry) {
                    if (!geometry) {
                        geometry = new ol.geom.Polygon(null);
                    }
                    var start = coordinates[0];
                    var end = coordinates[1];
                    geometry.setCoordinates([
                        [start, [start[0], end[1]], end, [end[0], start[1]], start]
                    ]);
                    return geometry;
                };
            }

            if (this.state.editLayer) {
                var draw = new ol.interaction.Draw({
                    source: this.state.editLayer.getSource(),
                    type: value,
                    geometryFunction: geometryFunction,
                    maxPoints: maxPoints,
                    style: defaultStyle
                });
                draw.setProperties({type: value});
                draw.on('drawend', (evt) => {this.getMap().history.onDrawEnd(evt)});
                return draw;
            }
        }
        return null;
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body tool-panel">
                <ButtonGroup>
                    <Button onClick={this.handleStartModify.bind(this)} className="btn-tool  btn-app btn-flat"><i className="fa fa-pencil-square-o"></i>{this.state.editLayer == null ? '选择编辑图层' : '停止编辑'}</Button>
                    <Button onClick={this.changeDrawType.bind(this, null)} id="null" className="btn-tool  btn-app btn-flat"><i className="fa fa-arrows-alt"></i>浏览</Button>
                    <Button onClick={this.changeDrawType.bind(this, 'Point')} id="Point" className="btn-tool  btn-app btn-flat"><i className="fa fa-dot-circle-o"></i>画点</Button>
                    <Button onClick={this.changeDrawType.bind(this, 'LineString')} id="LineString" className="btn-tool btn-app btn-flat"><i className="fa fa-vine"></i>画线</Button>
                    <Button onClick={this.changeDrawType.bind(this, 'Polygon')} id="Polygon" className="btn-tool  btn-app btn-flat"><i className="fa fa-square"></i>画面</Button>
                </ButtonGroup>
            </div>
            <LayerSelectModal ref="selectLayer" layers={this.state.layers}/>
        </div>;
    }
}

class ContourTool extends React.Component {

    state = {
        data: null,
        triangle: null,
        triangleLayer : null,
        contourLayer : null,
        layers: null,
        zMin : Number.NEGATIVE_INFINITY,
        zMax : Number.POSITIVE_INFINITY
    };

    handleloadFile() {
        this.refs.reader.open(this::this.handleFileReaded);
    }

    handleFileReaded(data) {
        this.setState({data : data});
        let features = DatLoader.read(data);
        let layer = new ol.layer.Vector({
            name: '高程点',
            source: new ol.source.Vector({
                features: features,
            }),
            style : defaultStyle
        });
        let extent = layer.getSource().getExtent();
        this.getMap().map.addLayer(layer);
        this.getMap().map.getView().fit(extent, this.getMap().map.getSize());

    }


    _dulaunay(data) {
        if (this.state.triangleLayer != null) {
            this.getMap().map.removeLayer(this.state.triangleLayer);
        }
        if (data != null) {
            let points = DatLoader.readFeatures(data);
            if (points.length < 3) {
                message.error('选择的离散点太少,无法生成三角网!', 2);
                return;
            }
            let triangles = Delaunay.triangulate(points);
            let features = new ol.Collection();
            let pTriangle = [];
            let tMin = Number.POSITIVE_INFINITY;
            let tMax = Number.NEGATIVE_INFINITY;
            for (let i = 0; i < triangles.length;) {
                let p1 = points[triangles[i++]];
                let p2 = points[triangles[i++]];
                let p3 = points[triangles[i++]];
                pTriangle.push([{x:p1[0],y:p1[1], z: p1[2]}, {x:p2[0],y:p2[1], z: p2[2]}, {x:p3[0],y:p3[1], z: p3[2]}]);
                tMin = p1[2] < tMin ? p1[2] : tMin;
                tMin = p2[2] < tMin ? p2[2] : tMin;
                tMin = p3[2] < tMin ? p3[2] : tMin;
                tMax = p1[2] > tMax ? p1[2] : tMax;
                tMax = p2[2] > tMax ? p2[2] : tMax;
                tMax = p3[2] > tMax ? p3[2] : tMax;
                let feature = new ol.Feature({
                    geometry: new ol.geom.Polygon([[p1, p2, p3]], 'XYZ'),
                });
                features.push(feature);

            }
            let layer = new ol.layer.Vector({
                name: '三角网',
                source: new ol.source.Vector({
                    features: features
                }),
                style : defaultStyle
            });
            let extent = layer.getSource().getExtent();
            this.getMap().map.addLayer(layer);
            this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
            this.setState({triangle: pTriangle, zMin: tMin, zMax : tMax, triangleLayer: layer});
            console.log([tMin, tMax]);
        }
    }

    handleDulaunay() {
        let layers = this.getMap().map.getLayers();
        this.setState({layers: layers});
        this.refs.triSetter.open(this::this._dulaunay);

    }

    _contour(step = 1, smooth_type = '0') {
        if (this.state.triangle != null) {
            let traceTool = new ContourTrance(this.state.triangle, this.state.zMin , this.state.zMax , step);
            let contourLines = traceTool.contourLineTrace();
            let smothed_contourLines = contourLines;
            switch (smooth_type) {
                case '0':
                    break;
                case '1':
                    smothed_contourLines = Smooth.b_spline(contourLines);
                    break;
                case '2':
                    smothed_contourLines = Smooth.cardinal_spline(contourLines);
                    break;
            }
            contourLines = smothed_contourLines;
            let features = new ol.Collection();
            for (let i = 0; i < contourLines.length; i++) {
                let geom = new ol.geom.LineString([], 'XYZ');
                for (let j = 0; j < contourLines[i].listPoint.length; j++) {
                    const point = contourLines[i].listPoint[j];
                    if (point) {
                        geom.appendCoordinate([point.x, point.y, point.z]);
                    }
                    else {
                        console.log(i, j);
                    }
                }
                if (contourLines[i].type == 1) {
                    const point = contourLines[i].listPoint[0];
                    if (point) {
                        geom.appendCoordinate([point.x, point.y, point.z]);
                    }
                    else {
                        console.log(i);
                    }
                }
                let feature = new ol.Feature({
                    geometry: geom
                });
                features.push(feature)
                contourLines[i].feature = feature;
            }
            if (contourLines.length > 0) {
                let layer = new ol.layer.Vector({
                    name : '等高线',
                    source: new ol.source.Vector({
                        features: features
                    }),
                    style: defaultStyle
                });
                let extent = layer.getSource().getExtent();
                if (this.state.triangleLayer != null) {
                    this.state.triangleLayer.setVisible(false);
                }
                this.getMap().contours = contourLines;

                this.getMap().map.addLayer(layer);
                this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
                this.setState({contourLayer: layer});
            }
            else {
                message.info('未追踪到等高线!', 2);
            }

        }
        else {
            message.warn('还没有生成三角网!', 2);
        }
    }

    handleContour() {
        this.refs.contourSetter.open(this::this._contour);
    }

    getMap() {
        return this.props.map.refs.map;
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body tool-panel">
                <ButtonGroup>
                    <Button onClick={this::this.handleloadFile} className="btn-tool  btn-app btn-flat">导入点文件</Button>
                    <Button onClick={this::this.handleDulaunay} className="btn-tool  btn-app btn-flat">生成不规则三角网</Button>
                    <Button onClick={this::this.handleContour} className="btn-tool  btn-app btn-flat">生成等高线</Button>
                </ButtonGroup>
            </div>
            <FileLoaderModal ref="reader"/>
            <TriSetting ref="triSetter" layers={this.state.layers} map={this.props.map}/>
            <ContourSetting ref="contourSetter" map={this.props.map} zMin={this.state.zMin} zMax={this.state.zMax} />
        </div>;
    }
}



class DataTool extends React.Component {

    state = {
        layers: null,
        contours: null
    }

    layerInfo() {
        //todo
        let layers = this.getMap().map.getLayers();
        this.setState({layers: layers});
        this.refs.layerView.open();
    }

    contourInfo() {
        let contours = this.getMap().contours;
        if (contours != null) {
            this.setState({contours: contours});
            this.refs.contourView.open();
        }
        else {
            message.info('还没有生成等高线!', 2);
        }

    }

    getMap() {
        return this.props.map.refs.map;
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body tool-panel">
                <ButtonGroup>
                    <Button onClick={this::this.layerInfo} className="btn-tool  btn-app btn-flat">图层信息</Button>
                    <Button onClick={this::this.contourInfo} className="btn-tool  btn-app btn-flat">等高线信息</Button>
                </ButtonGroup>
            </div>
            <LayerModal ref="layerView" layers={this.state.layers} map={this.props.map}/>
            <ContourLineModal ref="contourView" contours={this.state.contours} map={this.props.map}/>
        </div>;
    }
}

export default class ToolBar extends React.Component {

    render() {
       return <div className="tool-container"><Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="绘图"><DrawTool map={this.props.parent}/></Tab>
            <Tab eventKey={2} title="等高线"><ContourTool map={this.props.parent}/></Tab>
            <Tab eventKey={3} title="数据"><DataTool map={this.props.parent}/></Tab>
        </Tabs></div>;
    }
}