import {Modal, Button} from 'react-bootstrap'
var React = require('react');
var ReactDOM = require('react-dom');

export default class FileUploader extends React.Component {

    state = {
        showModal: false
    };

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    render() {
        return <Modal show={this.state.showModal} onHide={this::this.close}>
            <Modal.Header closeButton>
                <Modal.Title>打开文件</Modal.Title>
            </Modal.Header>
            <form id="mapUploader" action="/karte/upload" method="post" encType="multipart/form-data">
                <Modal.Body>

                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="uploadFile">选择本地文件</label>
                                <input type="file" id="uploadFile" accept=".dxf,.json,.kml" name="file"/>
                                <p className="help-block ng-binding">支持的格式：ShapeFile 格式(.shp), GeoJson 格式(.json), KML 格式(.kml), AutoCad DXF 格式(.dxf)</p>
                            </div>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this::this.close}>Close</Button>
                    <input type="submit" className="btn btn-primary"/>
                </Modal.Footer>
            </form>
            </Modal>
    }
}