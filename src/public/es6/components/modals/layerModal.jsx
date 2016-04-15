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

    renderLayerList() {
        if (this.props.layers != null) {
            let rows = [];
            this.props.layers.forEach((layer, index, arr) => {
                let colorStyle = layer.getStyle()[0];
                let stroke = colorStyle.getStroke();
                let fill = colorStyle.getFill();
                rows.push(<tr key={index}>
                    <td>{layer.get('name') || 'Undefined'}</td>
                    <td>否</td>
                    <td>{layer.getVisible() ? '显示' : '隐藏'}</td>
                    <td><div style={{width: 60, height: 30, backgroundColor :stroke.getColor(), border: "1px solid #ddd"}} ></div></td>
                    <td><div style={{width: 60, height: 30, backgroundColor :fill.getColor(),  border: "1px solid #ddd"}} ></div></td>
                </tr>)
            })
            return rows;
        }
    }


    render() {
        return <Modal show={this.state.showModal} onHide={this::this.close} bsSize="lg">
            <Modal.Header closeButton>
                <Modal.Title>图层信息</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Table >
                        <thead>
                        <tr><th>图层名</th><th>锁定</th><th>显示状态</th><th>边框颜色</th><th>填充颜色</th></tr>
                        </thead>
                        <tbody>
                        {this.renderLayerList()}
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