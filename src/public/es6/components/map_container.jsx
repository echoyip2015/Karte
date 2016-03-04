var React = require('react');
var ReactDOM = require('react-dom');
import Map from './map'
import ToolBar from './tool_bar'

export default class MapContainer extends React.Component {

    render() {
        return  <div>
            <ToolBar ref="toolbar" parent={this}/>
            <Map ref="map" center={this.props.center} extent={this.props.extent} source={this.props.source}/>
        </div>;
    }
}