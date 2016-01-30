import {DropdownButton, Button , MenuItem, Table} from 'react-bootstrap'

export default class FileTable extends React.Component {

    state = {
        files: <tr><td>文件加载中..</td></tr>
    };

    componentDidMount() {
        this.getFiles();
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
                                        <li role="presentation"><a role="menuitem" >重命名</a></li>
                                        <li role="presentation"><a role="menuitem" >删除</a></li>
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
        return <Table >
                <thead>
                <tr><th>文件名</th><th>修改时间</th><th>大小</th><th>类型</th><th>操作</th></tr>
                </thead>
                <tbody>
                {this.state.files}
                </tbody>
            </Table>;
    }
}