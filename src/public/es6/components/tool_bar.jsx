var React = require('react');
var ReactDOM = require('react-dom');
import {Tabs, Tab, ButtonGroup, Button} from 'react-bootstrap'
import FileLoaderModal from './modals/fileLoaderModal'
import DatLoader from '../libs/DatLoader'
import Delaunay from '../libs/Delaunay'



class DrawTool extends React.Component {

    state = {type: null, draw: null};

    changeDrawType(e) {
        this.setState({type: e.currentTarget.id});
        let draw = this.getInteraction(e.currentTarget.id);
        if (draw) {
            this.setState({draw: draw});
            this.getMap().map.addInteraction(draw);
        }
        else if (this.state.draw != null) {
            this.getMap().map.removeInteraction(this.state.draw);
        }
    }

    getMap() {
        return this.props.map.refs.map;
    }

    getInteraction(value) {
        if (value != null) {
            if (value === 'null') {
                return null;
            }
            var geometryFunction, maxPoints;
            if (value === 'Square') {
                value = 'Circle';
                geometryFunction = ol.interaction.Draw.createRegularPolygon(4);
            } else if (value === 'Box') {
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
            var draw = new ol.interaction.Draw({
                source: this.getMap().vectorSource,
                type: value,
                geometryFunction: geometryFunction,
                maxPoints: maxPoints
            });
            return draw;
        }
        return null;
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-body tool-panel">
                <ButtonGroup>
                    <Button onClick={this::this.changeDrawType} id="null" className="btn-tool  btn-app btn-flat">浏览</Button>
                    <Button onClick={this::this.changeDrawType} id="Point" className="btn-tool  btn-app btn-flat"><i className="fa fa-dot-circle-o"></i>画点</Button>
                    <Button onClick={this::this.changeDrawType} id="LineString" className="btn-tool btn-app btn-flat"><i className="fa fa-vine"></i>画线</Button>
                    <Button onClick={this::this.changeDrawType} id="Polygon" className="btn-tool  btn-app btn-flat"><i className="fa fa-square"></i>画面</Button>
                </ButtonGroup>
            </div>
        </div>;
    }
}

class ContourTool extends React.Component {

    state = {data: null};

    handleloadFile() {
        this.refs.reader.open(this::this.handleFileReaded);
    }

    handleFileReaded(data) {
        this.setState({data : data});
        let features = DatLoader.read(data);
        let layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: features
            })
        });
        let extent = layer.getSource().getExtent();
        this.getMap().map.addLayer(layer);
        this.getMap().map.getView().fit(extent, this.getMap().map.getSize());

    }

    handleDulaunay() {
        if (this.state.data != null) {
            let points = DatLoader.readRaw(this.state.data);
            let triangles = Delaunay.triangulate(points);
            let features = new ol.Collection();
            for (let i = 0; i < triangles.length;) {
                let p1 = points[triangles[i++]];
                let p2 = points[triangles[i++]];
                let p3 = points[triangles[i++]];
                let feature = new ol.Feature({
                    geometry: new ol.geom.Polygon([[p1, p2, p3]], 'XYZ'),
                });
                features.push(feature);

            }
            let layer = new ol.layer.Vector({
                source: new ol.source.Vector({
                    features: features
                })
            });
            let extent = layer.getSource().getExtent();
            this.getMap().map.addLayer(layer);
            this.getMap().map.getView().fit(extent, this.getMap().map.getSize());
        }
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
                    <Button  className="btn-tool  btn-app btn-flat">生成等高线</Button>
                </ButtonGroup>
            </div>
            <FileLoaderModal ref="reader"/>
        </div>;
    }
}

export default class ToolBar extends React.Component {

    render() {
       return <div className="tool-container"><Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="绘图"><DrawTool map={this.props.parent}/></Tab>
            <Tab eventKey={2} title="等高线"><ContourTool map={this.props.parent}/></Tab>
            <Tab eventKey={3} title="数据">Tab 3 content</Tab>
        </Tabs></div>;
    }
}