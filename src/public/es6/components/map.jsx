var React = require('react');
var ReactDOM = require('react-dom');

export default class Map extends React.Component {


    static defaultStyle = {};

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
            source: this.vectorSource
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