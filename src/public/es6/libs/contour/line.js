/**
 *
 * @authors 祝志颖 (c0de4ac@baicizhan.com)
 * @date    2016-03-06 15:12
 * @version 1.0.0
 */


class CLine {

    constructor() {
        this.listPoints = [];
    }

    start() {
        return this.listPoints[0];
    }

    end() {
        let length = this.listPoints.length;
        return this.listPoints[length-1];
    }

    insertPoint(point) {
        //todo
    }
}

export default CLine;