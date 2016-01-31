var React = require('react');
var ReactDOM = require('react-dom');
import FileUploader from './upload_modal'

export var HomeHeader = class extends React.Component {

    render() {
        return <header className="main-header">
            <a href="/" className="logo">
            Karte
            </a>
            <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        welcome! ,  visitor
                        </a>
                    </li>
                </ul>
            </div>
            <MainMenu ref="menu"/>
            </nav>
        </header>
    }
};

export var DrawerHeader = class extends React.Component {

    openMenu() {
        $(ReactDOM.findDOMNode(this.refs.menu)).css('left', '0px');
    }

    render() {
        return <header className="main-header">
            <a href="/" className="logo">
                Karte
            </a>
            <nav className="navbar navbar-static-top" role="navigation">
                <a href="#" className="sidebar-toggle" onClick={this::this.openMenu}>
                    <span className="sr-only">Toggle navigation</span>
                </a>

                <div className="navbar-collapse pull-left collapse">
                    <ul className="nav navbar-nav">
                        <li><span>准备就绪</span></li>
                    </ul>
                </div>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                welcome! ,  visitor
                            </a>
                        </li>
                    </ul>
                </div>
                <MainMenu ref="menu"/>
            </nav>
        </header>
    }
};

export var MainSiderBar = class extends React.Component {
    render() {
        return <div className="main-sidebar">
                <div className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="active">
                            <a href="/home">
                            <i className="glyphicon glyphicon-home"></i>
                            <span>我的文件</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    }
};

export var MainMenu = class extends React.Component {

    close() {
        $(ReactDOM.findDOMNode(this)).css('left', '-740px');
    }

    handleUploadFile() {
        this.refs.fileUploader.open();
    }

    render() {
        return <div className="main-menu" tabIndex="-1">
            <ul className="tab-head">
                <li className="close-menu" onClick={this::this.close}><i className="fa fa-chevron-left"></i></li>
                <li className="main-menu-tool active" > <a href="#tool-new" data-toggle="tab"><span>新建</span></a></li>
                <li className="main-menu-tool" > <a href="#tool-open" data-toggle="tab"><span>打开</span></a></li>
                <li className="main-menu-tool" > <a href="#tool-export" data-toggle="tab"><span>另存为</span></a></li>
            </ul>
            <div className="tab-body tab-content">
                <div className="tab-pane active" id="tool-new">
                    <h2 className="title">新建</h2>
                    <ul className="template-list">
                        <li className="template-item" onclick="Karte.MainTool.newMapFile()"><span className="ng-binding">空白地图</span></li>
                    </ul>
                </div>
                <div className="tab-pane" id="tool-open">
                    <h2 className="title">打开</h2>
                    <h3 className="latest-files-title">最近使用的文件</h3>
                    <ul className="latest-files">
                        <li  className="ng-scope" onclick="Karte.MainTool.openMapFile()">
                            <span className="icon"><i className="fa fa-file-image-o"></i></span>
                            <span className="filename ng-binding">地形图绘制系统功能设计.km</span>
                            <span className="info ng-binding">5 天前</span></li>
                    </ul>
                    <a className="go-home" href="/home" target="_self" title="到我的文档里查看更多">到我的文档里查看更多..</a>
                    <div className="item import-file" onClick={this::this.handleUploadFile}>
                        <i className="glyphicon glyphicon-open icon"></i>
                        <span className="item-name">打开本地文件</span>
                        <span className="item-info">上传本地地图文件，并编辑</span>
                    </div>
                </div>
                <div className="tab-pane" id="tool-export">
                    <h2 className="title">另存为</h2>
                    <ul className="items">
                        <li className="item" onclick="Karte.MainTool.reSaveFile()">
                            <i className="glyphicon glyphicon-duplicate icon"></i>
                            <span className="item-name">另存为</span>
                            <span className="item-info">保存副本到我的文档</span>
                        </li>
                        <li className="item" onclick="Karte.MainTool.renameFile()">
                            <i className="glyphicon glyphicon-edit icon"></i>
                            <span className="item-name">重命名</span>
                            <span className="item-info">重命名此文件</span>
                        </li>
                        <li className="item" onclick="Karte.MainTool.exportFile()">
                            <i className="glyphicon glyphicon-save icon"></i>
                            <span className="item-name">导出</span>
                            <span className="item-info">将文件导出到本地（不包含第三方格式，.dxf 文件除外）</span></li>
                    </ul>
                </div>
            </div>
            <FileUploader ref="fileUploader"/>
        </div>
    }
};