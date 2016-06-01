import { Button} from 'react-bootstrap'
import {Modal, Upload, Icon, message} from 'antd'
var React = require('react');
var ReactDOM = require('react-dom');

const Dragger = Upload.Dragger;

export default class FileLoaderModal extends React.Component {

    state = {
        showModal: false,
        loading: false,
        data: null,
        callback: null,
        fileList:[]
    };

    uploadProps = {
        name: 'file',
        showUploadList: true,
        action: '/karte/load_text_data'
    };

    open(callback) {
        this.setState({ showModal: true, callback: callback });
    }

    close() {
        this.setState({ showModal: false });
    }

    onUploadChange(evt) {
        let file = evt.file;
        let fileList = evt.fileList;
        fileList = fileList.slice(-1);
        if (file.status == 'done') {
            if (file.response.data) {
                this.setState({data: file.response.data});
            }
            else {
                this.setState({data: null});
                message.info('上传的文件格式错误!!', 3);
                fileList = fileList.filter(function(file) {
                    if (file.response && file.response.msg === 'failed') {
                        return false;
                    }
                    return true;
                });
            }

        }
        else {
            this.setState({data: null});
        }
        this.setState({fileList: fileList});
    }

    read() {
        if (this.state.data) {
            if (this.state.callback != null) {
                this.state.callback(this.state.data);

            }
            this.close();
            return true;
        }
        else {
            message.info('还未读取到离散点文件!', 3);
            return false;
        }
    }

    render() {
        return <Modal title="读取文件" visible={this.state.showModal} onCancel={this::this.close} onOk={this::this.read}>
                <div className="modal-body">
                    <div className="form-group" style={{ height: 160}}>
                        <Dragger {...this.uploadProps} onChange={this::this.onUploadChange} fileList={this.state.fileList}>
                            <Icon type="plus" />
                            <p className="ant-upload-text">选择本地文件,或将文件拖拽到此区域上传</p>
                            <p className="ant-upload-hint">支持的格式：txt , dat</p>
                        </Dragger>
                    </div>
                </div>
        </Modal>;
    }
}