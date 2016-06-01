import { FormControls, form} from 'react-bootstrap'
import {Modal, Button} from 'antd'
var React = require('react');
var ReactDOM = require('react-dom');

export default class MapMetaModal extends React.Component {

    state = {
        showModal: false,
        file : null
    };

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    proj() {
        if (this.state.file == null) {
            return '未知';
        }
        else {
                return this.state.file.meta.proj;
        }
    }

    extent() {
        if (this.state.file == null) {
            return <div/>; //an empty div
        }
        else {
            let meta = this.state.file.meta;
            return [
                <span key={0} className="col-xs-6">minX: {meta.extent[0]}</span>,
                <span key={1} className="col-xs-6">minY: {meta.extent[1]}</span>,
                <span key={2} className="col-xs-6">maxX: {meta.extent[2]}</span>,
                <span key={3} className="col-xs-6">maxY: {meta.extent[3]}</span>,
            ];
        }
    }

    render() {
        return <Modal title="空间元信息" visible={this.state.showModal}  onCancel={this::this.close}
            footer={<Button type="primary" onClick={this::this.close}>确定</Button>}>
                <form className="form-horizontal">
                    <FormControls.Static label="坐标投影" labelClassName="col-xs-3" wrapperClassName="col-xs-9" value={this.proj()} />
                    <FormControls.Static label="坐标范围" labelClassName="col-xs-3" wrapperClassName="col-xs-9">{this.extent()}</FormControls.Static>
                </form>
        </Modal>
    }
}