import {Modal, Button, Table, Label} from 'react-bootstrap'
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

    renderContourInfo() {
        console.log(this.props.contours);
        if (this.props.contours != null) {
            let rows = this.props.contours.map((contour, index) =>
                    <tr key={index}>
                    <td>{contour.value}</td>
                    <td>{contour.type == 1 ? '闭合' : '开放'}</td>
                    <td>{contour.listPoint.length}</td>
                </tr>
            )
            return rows;
        }
    }


    render() {
        return <Modal show={this.state.showModal} onHide={this::this.close} bsSize="lg">
            <Modal.Header closeButton>
                <Modal.Title>等高线信息</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table >
                    <thead>
                    <tr><th>高程值</th><th>类型</th><th>点数</th></tr>
                    </thead>
                    <tbody>
                    {this.renderContourInfo()}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this::this.close}>Close</Button>
                <Button onClick={this::this.updateLayers} className="btn btn-primary">确定</Button>
            </Modal.Footer>
        </Modal>;
    }
}