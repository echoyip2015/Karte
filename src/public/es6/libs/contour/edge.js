/**
 *
 * @authors 祝志颖 (c0de4ac@baicizhan.com)
 * @date    2016-03-06 15:12
 * @version 1.0.0
 */


class CEdge {

    constructor(start, end) {
        this.id = -1;
        this.numRef = 0;
        this.listTri = [];
        this.startId = start;
        this.endId = end;
    }

}

export default CEdge;