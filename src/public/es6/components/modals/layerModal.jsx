import { Button, Table, Label} from 'react-bootstrap'
import {Modal, message, Switch, Popconfirm} from 'antd'
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

    changeVisible(layer, checked) {
        layer.setVisible(checked);
        this.setState({visible: checked});
    }

    deleteLayer(layer) {
        let map = this.props.map.refs.map.map;
        if (this.props.layers && this.props.layers.getLength() > 1) {
            map.removeLayer(layer);
        }
        else {
            message.warn('最后一个图层无法删除!', 2);
        }

        this.setState({visible: true}); //reRender
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
                    <td><Switch checked={layer.getVisible()} onChange={this.changeVisible.bind(this, layer)} /></td>
                    <td><div style={{width: 60, height: 30, backgroundColor :stroke.getColor(), border: "1px solid #ddd"}} ></div></td>
                    <td><div style={{width: 60, height: 30, backgroundColor :fill.getColor(),  border: "1px solid #ddd"}} ></div></td>
                    <td>  <Popconfirm title="确定要删除这个图层吗？" onConfirm={this.deleteLayer.bind(this, layer)} onCancel={()=>{}}>
                        <a href="javascript:(0)" style={{color: '#c7254e', fontSize: 12}}>删除</a>
                    </Popconfirm></td>
                </tr>)
            })
            return rows;
        }
    }


    render() {
        return <Modal title="图层信息" visible={this.state.showModal} onCancel={this::this.close} onOk={this::this.updateLayers} width={800}>
                    <Table >
                        <thead>
                        <tr><th>图层名</th><th>显示状态</th><th>边框颜色</th><th>填充颜色</th><th></th></tr>
                        </thead>
                        <tbody>
                        {this.renderLayerList()}
                        </tbody>
                    </Table>
        </Modal>;
    }
}