import {Button, Table, Label, Input} from 'react-bootstrap'
import {Modal, message, Radio} from 'antd'
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
            message.info('还没有选择任何图层!', 3);
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
                    <td> <Radio checked={checked} onClick={this.handleSelect.bind(this, layer)} readOnly></Radio></td>
                    <td>{index}</td>
                    <td>{layer.get('name') || 'Undefined'}</td>
                    <td>否</td>
                </tr>)
            });
            return rows;
        }
    }


    render() {
        return <Modal title="选择需要开始编辑的图层" width={680} visible={this.state.showModal} onCancel={this::this.close} onOk={this::this.ok}>
                <Table >
                    <thead>
                    <tr><th>选择</th><th>编号</th><th>图层名</th><th>锁定</th></tr>
                    </thead>
                    <tbody>
                    {this.renderLayerList()}
                    </tbody>
                </Table>
        </Modal>;
    }
}