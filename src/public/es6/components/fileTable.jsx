import {DropdownButton, Button , MenuItem, Table} from 'react-bootstrap'
import {Modal} from 'antd'
import FileMetaModal from './modals/metaEditor'
import FileRenamer from './modals/renameModal'
import FileExporter from './modals/exportModal'


export default class FileTable extends React.Component {

    state = {
        files: <tr><td>文件加载中..</td></tr>
    };

    componentDidMount() {
        this.getFiles();
    }

    deleteFile(e) {
        let id  = e.currentTarget.id;
        Modal.confirm({
            title: '确认删除该地图?',
            content: '点击确定继续操作',
            onOk: () => {
                $.post('/karte/delete_map', {id: id}, result => {
                    if (result.msg == 'ok') {
                        this.getFiles();
                    }
                })
            }
        });


    }

    editFileMeta(e) {
        let id = e.currentTarget.id;
        $.get('/karte/map_meta?id='+id, result => {
            if (result.msg == 'ok') {
                this.refs.meta.setState({file: result.file});
                this.refs.meta.open();
            }
            else {
                console.log(result);
            }
        })
    }

    renameFile(id, title) {
        this.refs.fileRenamer.setState({id: id, title: title});
        this.refs.fileRenamer.open(()=>{
            this.getFiles();
        });
    }

    exportFile(id, title) {
        this.refs.fileExporter.setState({id: id, title: title});
        this.refs.fileExporter.open();
    }

    getFiles() {
        $.get('/files', result => {
            let list = null;
            if (result.msg == 'ok') {
                list = result.files.map( file => <tr key={file._id.$oid}>
                        <td><a href={"/file/"+file._id.$oid}><i className="glyphicon glyphicon-file"></i> {file.title}</a></td>
                        <td>{file.modify_time}</td>
                            <td>{(file.size / 1024 / 1024).toPrecision(2)} MB</td>
                            <td>{file.extname}</td>
                            <td><ul className="nav">
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                                        操作 <span className="caret"></span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li id={file._id.$oid} onClick={this.renameFile.bind(this, file._id.$oid, file.title)}><a href='javascript:void(0);' >重命名</a></li>
                                        <li id={file._id.$oid} onClick={this.exportFile.bind(this, file._id.$oid, file.title)}><a href='javascript:void(0);' >导出文件</a></li>
                                        <li id={file._id.$oid} onClick={this::this.editFileMeta}><a href='javascript:void(0);' >地图元信息编辑</a></li>
                                        <li id={file._id.$oid} onClick={this::this.deleteFile}><a href='javascript:void(0);'>删除</a></li>
                                    </ul>
                                </li>
                            </ul>
                    </td>
                </tr>);
            }
            else {
                list = <tr><td colSpan="5">加载文件列表失败.</td></tr>
            }
            this.setState({files: list});
        });
    }

    render() {
        return <div><Table >
                <thead>
                <tr><th>文件名</th><th>修改时间</th><th>大小</th><th>类型</th><th>操作</th></tr>
                </thead>
                <tbody>
                {this.state.files}
                </tbody>
            </Table>
            <FileMetaModal ref="meta"/>
            <FileRenamer ref="fileRenamer" fileId={this.state.fileId} fileTitle={this.state.fileTitle} />
            <FileExporter ref="fileExporter" fileId={this.state.fileId} fileTitle={this.state.fileTitle} />
        </div>;
    }
}