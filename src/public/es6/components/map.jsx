var React = require('react');
var ReactDOM = require('react-dom');
import defaultStyle from '../styles/default'

export default class Map extends React.Component {

    state = {map: null};


    constructor() {
        super();

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
        this.vectorSource = new ol.source.Vector({
            url: this.props.source,
            format: new ol.format.KML(),
            wrapX: false
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

        this.map.addInteraction(this.dragBox);

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

        this.map.on('click', () => {
            this.selectedFeatures.clear();
        });

        this.map.addLayer(this.vectorLayer);
        this.map.addControl(new ol.control.ScaleLine());
        this.map.addControl(new ol.control.MousePosition());
        this.map.getView().fit(this.props.extent,this.map.getSize());
        this.map.render();
        this.setState({map: this.map});
    }

    render() {
        return <div className="map-editor-container" ref="mapDoc"></div>
    }


}