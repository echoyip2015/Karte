import {Modal, Button, Upload, Icon, message} from 'antd'
var React = require('react');
var ReactDOM = require('react-dom');

const Dragger = Upload.Dragger;

export default class FileUploader extends React.Component {

    state = {
        showModal: false,
        fileList: []
    };

    uploadProps = {
        name: 'file',
        showUploadList: true,
        action: '/karte/upload',
        accept: ".dxf,.json,.kml"
    };

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    onUploadChange(evt) {
        let file = evt.file;
        let fileList = evt.fileList;
        fileList = fileList.slice(-1);
        if (file.status == 'done') {
            if (file.response.map) {
                this.load(file.response.map);
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
        this.setState({fileList: fileList});
    }

    load(map) {
        if (map) {
            let id = map._id.$oid;
            this.close();
            window.location = '/file/' + id;
            return true;
        }
        else {
            message.info('还未上传地图文件!', 3);
            return false;
        }
    }

    render() {
        return <Modal title="打开文件" visible={this.state.showModal} onCancel={this::this.close} footer={<Button type="primary" onClick={this::this.close}>确定</Button>}>
            <form id="mapUploader" action="/karte/upload" method="post" encType="multipart/form-data">
                <div className="modal-body">
                    <div className="form-group" style={{ height: 160}}>
                        <Dragger {...this.uploadProps} onChange={this::this.onUploadChange} fileList={this.state.fileList}>
                            <Icon type="plus" />
                            <p className="ant-upload-text">选择本地文件,或将文件拖拽到此区域上传</p>
                            <p className="ant-upload-hint">支持的格式：GeoJson 格式(.json), KML 格式(.kml), AutoCad DXF 格式(.dxf)</p>
                        </Dragger>
                    </div>
                    </div>
            </form>
            </Modal>
    }
}