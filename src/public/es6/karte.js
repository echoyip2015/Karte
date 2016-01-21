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

class BaseTool {
    constructor(elem) {
        this.target = elem;
    }
}

class MapTool extends BaseTool {

    constructor(elem, options) {
        super(elem);
        this.mouse = options.mouse;
    }

    onClick() {
        //todo
    }
}

class MapDocument {
    constructor(option) {
        this.map = new ol.Map({
            target: option.target
        });
        this.mapTools = [];
    }

    static registTool(obj) {
        if (!(obj instanceof MapTool)) {
            throw new TypeError("not an instance of Tool!");
        }
    }
}


/* follow field generate the delaunay triangel */

class XYZ {

    //EPSILON = 0.0000001;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }


    /**
     *
     * @Compare
     * @param other {XYZ}
     *
     */
    Compare(other) {
        //todo
    }

    /**
     *
     * @inCircle
     * @param triangle {TRIANGLE}
     *
     */
    inCircle(triangle) {
        //todo
    }
}

class TRIANGLE {

    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
}

class EDGE {

    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
}

class Delaunay {

    constructor() {

    }

    Triangulate() {
        //todo
    }
}

/* end generate delaunay triangle */











class Karte {}

Karte.MainTool = ToolFunc;