import {Modal, Button, Radio, message, Form, Input, Row, Col} from 'antd'
import {Table} from 'react-bootstrap'
var React = require('react');
var ReactDOM = require('react-dom');
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;

export default class ContourSetting extends React.Component {

    state = {
        showModal: false,
        selected: null,
        type: '0',
        file : null,
        step : 1,
        callback: null,
    };

    open(callback) {
        this.setState({ showModal: true, callback: callback });
    }

    close() {
        this.setState({ showModal: false });
    }

    onChange(e) {
        console.log('radio checked:' + e.target.value);
        this.setState({type: e.target.value});
    }

    handleSelect(layer) {
        console.log(layer);
        this.setState({selected: layer});
    }

    handleOk() {
        if (this.state.callback != null ) {
            this.state.callback(this.state.step, this.state.type);
        }
        this.close();
    }

    handleChange(e) {
        this.setState({step:e.target.value});
    }



    render() {
        return <Modal title="生成等高线" visible={this.state.showModal}  onCancel={this::this.close}
                      footer={<Button type="primary" onClick={this::this.handleOk}>确定</Button>}>
            <Row>
                <Col span="8">
                    <FormItem
                        label="最小高程："
                        labelCol={{span: 10}}
                        wrapperCol={{span: 14}}>
                        <Input disabled value={this.props.zMin || 0} />
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        label="最大高程："
                        labelCol={{span: 10}}
                        wrapperCol={{span: 14}}>
                        <Input disabled value={this.props.zMax || 0} />
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem
                        label="等高距："
                        labelCol={{span: 10}}
                        wrapperCol={{span: 14}}>
                        <Input  value={this.state.step} onChange={this::this.handleChange} />
                    </FormItem>
                </Col>
                <Col span="24">
                    <p style={{marginTop: 10}}>等高线光滑参数设置</p>
                    <RadioGroup  value={this.state.type} onChange={this::this.onChange}>
                        <Radio value="0">不平滑</Radio>
                        <Radio value="1">三次B样条函数平滑</Radio>
                        <Radio value="2">张力样条函数平滑</Radio>
                    </RadioGroup>
                </Col>
            </Row>
        </Modal>
    }
}