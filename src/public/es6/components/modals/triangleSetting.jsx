import {Modal, Button, Radio, message} from 'antd'
import {Table} from 'react-bootstrap'
var React = require('react');
var ReactDOM = require('react-dom');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class TriSetting extends React.Component {

    state = {
        showModal: false,
        selected: null,
        type: '0',
        file : null,
        callback: null,
    };

    open(callback) {
        this.setState({ showModal: true, callback: callback });
    }

    close() {
        this.setState({ showModal: false });
    }

    onChange(e) {
        this.setState({type: e.target.value});
    }

    handleSelect(layer) {
        this.setState({selected: layer});
    }

    handleOk() {

        if (this.state.selected) {
            this.close();
            let selecetedFeatures = this.props.map.refs.map.select.getFeatures();
            selecetedFeatures.clear();
            if (this.state.type == '0') {
                let source = this.state.selected.getSource();
                let features = source.getFeatures();
                features.forEach((feature)=>{
                    let geom = feature.getGeometry();
                    if (geom instanceof ol.geom.Point) {
                        selecetedFeatures.push(feature);
                    }
                });
                if (this.state.callback != null ) {
                    this.state.callback(selecetedFeatures);
                }
            }
            else {
                let hide = message.info('请选择地图上的高程点!', 0);
                let promise = new Promise((resolve, reject) => {
                    let dragbox = this.props.map.refs.map.dragBox;
                    dragbox.once('boxend', () => {
                        let extent = dragbox.getGeometry().getExtent();
                        this.state.selected.getSource().forEachFeatureIntersectingExtent(extent, (feature) => {
                            let geom = feature.getGeometry();
                            if (geom instanceof ol.geom.Point) {
                                selecetedFeatures.push(feature);
                            }

                        });
                        resolve(selecetedFeatures);
                    });
                    setTimeout(reject, 30000);
                });
                promise.then((features)=> {
                    hide();
                    if (this.state.callback != null ) {
                        this.state.callback(features);
                    }
                }, ()=> {
                    hide();
                    message.info('选择高程点超时!', 2);
                });
            }
        } else {
            message.info('还没有选择图层',2);
        }
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
                    <td> <Radio type="radio" checked={checked} onClick={this.handleSelect.bind(this, layer)} readOnly></Radio></td>
                    <td>{index}</td>
                    <td>{layer.get('name') || 'Undefined'}</td>
                    <td>否</td>
                </tr>)
            });
            return rows;
        }
    }


    render() {
        return <Modal title="生成三角网" visible={this.state.showModal}  onCancel={this::this.close}
                      footer={<Button type="primary" onClick={this::this.handleOk}>确定</Button>}>
            <div>
                <h5>选择离散点图层</h5>
                <Table>
                    <thead>
                    <tr><th>选择</th><th>编号</th><th>图层名</th><th>锁定</th></tr>
                    </thead>
                    <tbody>
                    {this.renderLayerList()}
                    </tbody>
                </Table>
                <RadioGroup  value={this.state.type} onChange={this::this.onChange}>
                    <Radio value="0">使用图层全部点</Radio>
                    <Radio value="1">框选部分数据</Radio>
                </RadioGroup>
            </div>
        </Modal>
    }
}