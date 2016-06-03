import {Button, Table, Label} from 'react-bootstrap'
import {Modal} from 'antd';
var React = require('react');
var ReactDOM = require('react-dom');

export default class LayerModal extends React.Component {

    state = {
        showModal: false,
        loading: false,
        callback: null,
    };

    open(callback) {
        this.setState({ showModal: true, callback: callback });
    }

    close() {
        this.setState({ showModal: false });
    }

    updateLayers() {
        this.setState({ showModal: false });
    }

    handleEdit(contour) {
        let map = this.props.map.refs.map
        let feature = contour.feature;
        map.selectedFeatures.clear();
        map.selectedFeatures.push(feature);
        this.close();
    }

    renderContourInfo() {
        console.log(this.props.contours);
        if (this.props.contours != null) {
            let rows = this.props.contours.map((contour, index) =>
                    <tr key={index}>
                    <td>{contour.value} m</td>
                    <td>{contour.type == 1 ? '闭合' : '开放'}</td>
                    <td><a href="#" onClick={this.handleEdit.bind(this, contour)} style={{color: '#2db7f5', fontSize: 12}}>编辑</a></td>
                </tr>
            )
            return rows;
        }
    }


    render() {
        return <Modal title="等高线信息" visible={this.state.showModal} onCancel={this::this.close} width={800}>
            <div className="modal-body" style={{maxHeight: 360}}>
                <Table >
                    <thead>
                    <tr><th>高程值</th><th>类型</th><th>操作</th></tr>
                    </thead>
                    <tbody>
                    {this.renderContourInfo()}
                    </tbody>
                </Table>
            </div>
        </Modal>;
    }
}