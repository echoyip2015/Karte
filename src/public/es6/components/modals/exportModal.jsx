import { Button} from 'react-bootstrap'
import {Modal, Select, Form, message} from 'antd'
var React = require('react');
var ReactDOM = require('react-dom');
import AlertBox from '../../libs/alert'

export default class FileExporter extends React.Component {

    state = {
        showModal: false,
        title: '',
        header: null,
        exportType: 'dxf',
        callBack: null
    };

    open(callBack) {
        this.setState({ showModal: true, callBack: callBack});
    }

    close() {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        let id = this.props.fileId ? this.props.fileId.$oid: null;
        this.setState({id: id, title: this.props.fileTitle});
    }

    onChange(e) {
        let value = e.currentTarget.value;
        this.setState({title: value});
    }

    handleChange(value) {
        this.setState({exportType: value});
    }

    handleExport() {
        this.close();
        let hide = message.loading('正在处理文件...', 0);
        $.get('/karte/export_file', {id: this.state.id, type: this.state.exportType}, (result)=>{

                let promise = new Promise((resolve, reject) => {
                    hide();
                    setTimeout(resolve, 800);
                });
                promise.then(()=> {
                    if (result.msg == 'failed') {
                        message.error('导出文件失败,文档内容为空,或存在错误!', 3);
                    }
                    else {
                        message.success('导出文件成功!', 3);
                        window.open(result.url);
                    }

                });
        });
    }

    render() {
        return <Modal title="导出地图" visible={this.state.showModal} onCancel={this::this.close} onOk={this::this.handleExport}>
            <div className="modal-body">
                <div className="form-group">
                    <label>选择导出文件格式: </label>
                    <Select defaultValue="dxf" size="large" style={{width:330, paddingLeft: 20}} onChange={this::this.handleChange}>
                        <Option value="dxf">dxf格式(.dxf)</Option>
                        <Option value="shp">shp格式(.shp.zip)</Option>
                        <Option value="kml" >kml格式(.kml)</Option>
                        <Option value="json">geojson格式(.json)</Option>
                    </Select>
                </div>
            </div>
        </Modal>
    }
}