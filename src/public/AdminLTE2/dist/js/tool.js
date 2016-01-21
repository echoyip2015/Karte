"use strict";
class ToolFunc {

    static closeMenu() {
        $('.main-menu').css('left', '-740px');
    }

    static openMenu() {
        $('.main-menu').css('left', '0px');
    }

    static importFile() {
        $('#openFileModal').modal('show');
    }

    static newMapFile() {
        //todo
    };

    static openMapFile() {
        //todo
    };

    static reSaveFile() {
        //todo
    };

    static renameFile() {
        //todo
    };

    static exportFile() {
        //todo
    };
}

export var MainTool = ToolFunc;




