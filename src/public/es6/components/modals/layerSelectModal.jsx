import {Modal, Button, Table, Label, Input} from 'react-bootstrap'
var React = require('react');
var ReactDOM = require('react-dom');

export default class LayerModal extends React.Component {

    state = {
        showModal: false,
        loading: false,
        callback: null,
        selected: null
    };

    open(callback) {
        this.setState({ showModal: true, callback: callback });
    }

    close() {
        this.setState({ showModal: false });
    }

    ok() {
        if (this.state.selected == null) {
            alert('还没有选择任何图层!');
            return;
        }
        this.setState({ showModal: false });
        if (this.state.callback != null ) {
            this.state.callback(this.state.selected);
        }
    }

    handleSelect(layer) {
        console.log(layer);
        this.setState({selected: layer});
    }

    renderLayerList() {
        if (this.props.layers != null) {
            let rows = [];
            this.props.layers.forEach((layer, index, arr) => {
                let checked = false;
                if(layer == this.state.selected) {
                    checked = true;
                }
                rows.push(<tr key={index}>
                    <td> <input type="radio" checked={checked} onClick={this.handleSelect.bind(this, layer)} readOnly></input></td>
                    <td>{index}</td>
                    <td>{layer.get('name') || 'Undefined'}</td>
                    <td>否</td>
                </tr>)
            });
            return rows;
        }
    }


    render() {
        return <Modal show={this.state.showModal} onHide={this::this.close} bsSize="lg">
            <Modal.Header closeButton>
                <Modal.Title>选择需要开始编辑的图层</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table >
                    <thead>
                    <tr><th>选择</th><th>编号</th><th>图层名</th><th>锁定</th></tr>
                    </thead>
                    <tbody>
                    {this.renderLayerList()}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this::this.close}>Close</Button>
                <Button onClick={this::this.ok} className="btn btn-primary">确定</Button>
            </Modal.Footer>
        </Modal>;
    }
}