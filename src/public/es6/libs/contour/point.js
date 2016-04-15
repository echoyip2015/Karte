/**
 *
 * @authors 祝志颖 (c0de4ac@baicizhan.com)
 * @date    2016-03-06 15:12
 * @version 1.0.0
 */


class CPoint {

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.id = -1;
        this.listIdEdge = [];
        this.listIdLine = [];
        this.listIdTri  = [];
    }
}

export default CPoint;