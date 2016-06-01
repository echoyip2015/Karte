import { Button} from 'react-bootstrap'
import {Modal} from 'antd'
var React = require('react');
var ReactDOM = require('react-dom');
import AlertBox from '../../libs/alert'

export default class FileRenamer extends React.Component {

    state = {
        showModal: false,
        title: '',
        header: null,
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

    handleRename() {
        if (this.state.title && this.state.id && this.state.title.length > 2) {
            $.post('/karte/rename_file', {id : this.state.id, title: this.state.title}, (result) => {
                this.setState({showModal: false});
                if (this.props.header) {
                    this.props.header.setState({title: this.state.title});
                }
                AlertBox.success('重命名成功!');
                if (this.state.callBack) {
                    this.state.callBack();
                }
            })
        }
    }

    render() {
        return <Modal title="重命名" visible={this.state.showModal} onCancel={this::this.close} onOk={this::this.handleRename}>
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="text"  value={this.state.title} onChange={this::this.onChange} accept=".dxf,.json,.kml" name="title" className="form-control"/>
                        </div>
                    </div>
            </Modal>
    }
}