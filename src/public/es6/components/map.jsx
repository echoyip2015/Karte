var React = require('react');
var ReactDOM = require('react-dom');
import {message, Spin} from 'antd'
import defaultStyle from '../styles/default'
import MapHistory from '../libs/MapHistory'

export default class Map extends React.Component {

    state = {map: null, state: 'loading', has_modify: false};


    constructor() {
        super();
        this.format = new ol.format.KML();

    }

    autoSave() {
        if (!this.state.has_modify) {
            return ;
        }
        let hide =  message.info('正在自动保存文件!');
        let layers = this.map.getLayers();
        let featureColection = [];
        layers.forEach((layer)=>{
            let source = layer.getSource();
            source.forEachFeature((feature)=>{
                featureColection.push(feature);
            });
        });
        let json_feature = new ol.format.GeoJSON({
            defaultDataProjection: 'EPSG:3857'
        }).writeFeatures(featureColection);
        $.post('/karte/auto_save', {id:  this.props.id, json_data: json_feature}, (result)=>{
            if (result.msg =='success') {
                hide();
                message.info('自动保存文件成功!');
                this.setState({has_modify: false});
            }
            else {
                hide();
                message.info('自动保存文件失败!');
            }
        }).error(()=>{
            hide();
            message.info('自动保存文件失败!');
        });
    }

    registerKeyBoardEvent() {
        document.onkeydown = (e) => {
            let which = null;
            if (window.event) {
                which = e.keyCode;
            } else {
                which = w.which;
            }
            if (which == 27 ) {//ESC
                const interactions = this.map.getInteractions();
                interactions.forEach((interaction) => {
                    if(interaction instanceof ol.interaction.Draw) {
                        if (interaction.get('type') != 'Point') {
                            interaction.removeLastPoint();
                        }
                    }
                });
            }
            else if (which == 90 && e.ctrlKey) { //ctrl + z
                const state = this.history.toPrevState();
                if (state && this.editLayer) {
                    if (state.feature) {
                        this.editLayer.getSource().removeFeature(state.feature);
                    }
                    else if (state.startfeatures && state.endfeatures) {
                        state.endfeatures.forEach((feature)=>{
                           this.editLayer.getSource().removeFeature(feature);
                        });
                        this.editLayer.getSource().addFeatures(state.startfeatures.getArray());
                       /* state.endfeatures.forEach((feature, index)=>{
                            console.log('xxx');
                            let clonef = feature.clone();
                            state.endfeatures.setAt(index, clonef);
                        });*/
                        this.selectedFeatures.clear();
                    }

                }
            }
            else if (which == 88 && e.ctrlKey) { //ctrl + x
                const state = this.history.toNextState();
                if (state && this.editLayer) {
                    if (state.feature) {
                        this.editLayer.getSource().addFeature(state.feature);
                    }
                    else if (state.startfeatures && state.endfeatures){
                        state.startfeatures.forEach((feature)=>{
                            this.editLayer.getSource().removeFeature(feature);
                        });
                        this.editLayer.getSource().addFeatures(state.endfeatures.getArray());
                        this.selectedFeatures.clear();
                    }
                }

            }
        };
        this.int = setInterval(this::this.autoSave, 30000);
    }

    componentWillUnmount() {
        clearInterval(this.int);
    }

    componentDidMount() {
        this.map = new ol.Map({
            target: this.refs.mapDoc,
            controls: ol.control.defaults({
                attributionOptions:  ({
                    collapsible: false
                })
            }),
            view: new ol.View({
                center: this.props.center,
                projection: 'EPSG:3857',
                zoom: 4
            })
        });
        let proj = proj4.defs(this.props.meta.proj);
        let defaultProj = 'EPSG:3857';
        if (proj == undefined && this.props.meta.proj !== 'unknown') {
            proj4.defs(this.props.title, this.props.meta.proj);
            defaultProj = this.props.title;
        }
        this.format = new ol.format.GeoJSON({
            defaultDataProjection: defaultProj
        });
        this.vectorSource = new ol.source.Vector({
            url: this.props.source,
            format: this.format,
            wrapX: false
        });
        this.vectorSource.on('change', (evt)=>{
            let state = evt.target.getState();
            this.setState({state: state});

        });
        this.vectorLayer = new ol.layer.Vector({
            name: 'Default',
            source: this.vectorSource,
            style: defaultStyle
        });
        this.editLayer = null;
        this.contours = null;
        this.select = new ol.interaction.Select();
        this.map.addInteraction(this.select);
        this.select.setActive(false);

        this.selectedFeatures = this.select.getFeatures();

        // a DragBox interaction used to select features by drawing boxes
        this.dragBox = new ol.interaction.DragBox({
            condition: ol.events.condition.platformModifierKeyOnly
        });

        this.modify = new ol.interaction.Modify({
            features: this.select.getFeatures()
        });

        this.modify.on('modifyend', (evt) => {this.history.onModifyEnd(evt)});
        this.modify.on('modifystart', (evt) => {this.history.onModifyStart(evt)})

        this.map.addInteraction(this.dragBox);
        this.map.addInteraction(this.modify);
        this.history = new MapHistory(this, this.props.id);

        this.dragBox.on('boxend', () => {
            if (this.editLayer == null) {
                return;
            }
            var extent = this.dragBox.getGeometry().getExtent();
            this.editLayer.getSource().forEachFeatureIntersectingExtent(extent, (feature) => {
                this.selectedFeatures.push(feature);
            });
        });
        this.dragBox.on('boxstart', () => {
            this.selectedFeatures.clear();
        });

        this.map.on('dblclick', () => {
            this.selectedFeatures.clear();
        });
        let projExtent = ol.proj.transformExtent(this.props.extent, defaultProj, 'EPSG:3857');
        this.map.addLayer(this.vectorLayer);
        this.map.addControl(new ol.control.ScaleLine());
        this.map.addControl(new ol.control.MousePosition());
        this.map.getView().fit(projExtent ,this.map.getSize());
        this.map.render();
        this.setState({map: this.map});
        this.registerKeyBoardEvent();
    }

    render() {
        if (this.state.state == 'loading') {
            return <div className="map-editor-container" ref="mapDoc">
                <div style={{position: 'relative', left: '48%', top: 200}}>
                <Spin />
                </div>
            </div>
        }
        return <div className="map-editor-container" ref="mapDoc">
            </div>
    }


}