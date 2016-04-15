import FileTable from '../components/fileTable'

ReactDOM.render( <div>
        <section className="content-header">
            <h1>
                我的文件
            </h1>
        </section>
        <div className="row">
            <div className="col-md-12 toolbar">
                <a href="/karte/new_map" className="btn btn-primary" ><span className="glyphicon glyphicon-plus"></span> 新建地图</a>
            </div>
            <div className="col-md-12">
                <FileTable />
            </div>
        </div>
    </div>,
    document.getElementById('content')
);