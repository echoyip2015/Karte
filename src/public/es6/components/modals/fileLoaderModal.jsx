import {Modal, Button} from 'react-bootstrap'
var React = require('react');
var ReactDOM = require('react-dom');

export default class FileLoaderModal extends React.Component {

    state = {
        showModal: false,
        loading: false,
        data: null,
        callback: null,
    };

    open(callback) {
        this.setState({ showModal: true, callback: callback });
    }

    close() {
        this.setState({ showModal: false });
    }

    read() {
        let data = new FormData(this.refs.form);
        let file = $(this.refs.file)[0];
        data.append(file.name, file.files[0]);
        this.setState({loading: true});
        $.ajax({
            url: "/karte/load_text_data",
            type: "POST",
            data:  data,
            processData: false,
            contentType: false,
            success: (res) => {
                this.setState({data: res.data, loading: false});
                if (this.state.callback != null) {
                    this.state.callback(res.data);
                }
                console.log(res);
            }
        });
        this.close();
        return false;
    }

    render() {
        return <Modal show={this.state.showModal} onHide={this::this.close}>
            <Modal.Header closeButton>
                <Modal.Title>读取文件</Modal.Title>
            </Modal.Header>
            <form id="mapUploader" ref="form" encType="multipart/form-data">
                <Modal.Body>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="uploadFile">选择本地文件</label>
                            <input type="file" ref="file" accept=".txt,.dat" name="file"/>
                            <p className="help-block">支持的格式：txt , dat</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this::this.close}>Close</Button>
                    <Button onClick={this::this.read} className="btn btn-primary">确定</Button>
                </Modal.Footer>
            </form>
        </Modal>
    }
}