/**
 *
 * @authors 祝志颖 (c0de4ac@baicizhan.com)
 * @date    2016-03-5 15:12
 * @version 1.0.0
 */
import CPoint from './contour/point'
import CTriangle from './contour/triangle'
import CLine from './contour/line'
import CEdge from './contour/edge'
import CContourLine from './contour/contourline'


class ContourTrance {

    constructor(triangleList, zMin, zMax, step) {
        this.triangleNetWork = triangleList;
        this.dMin = zMin;
        this.dMax = zMax;
        this.step = step
        this.initial();
    }

    dMax = Number.POSITIVE_INFINITY;
    dMin = Number.NEGATIVE_INFINITY;
    lineValue = [];
    lineNum = 10;

    pointList = [];
    edgeList = [];
    triCheckIndex = new Set();
    //triBandIndex = [];
    triTotal = [];
    edgeBandIndex = [];
    contourLine = [];



    initial() {
        let numTriangle = this.triangleNetWork.length;
        if (numTriangle < 2) return;

        for (let i = 0; i < numTriangle; i++) {
            const triangle = this.triangleNetWork[i];
            let tempPoint0 = this.assetPoint(new CPoint(triangle[0].x, triangle[0].y, triangle[0].z));
            let tempPoint1 = this.assetPoint(new CPoint(triangle[1].x, triangle[1].y, triangle[1].z));
            let tempPoint2 = this.assetPoint(new CPoint(triangle[2].x, triangle[2].y, triangle[2].z));
            if (tempPoint0.id == -1) {
                tempPoint0.id = this.pointList.length;
                this.pointList.push(tempPoint0);
            }
            if (tempPoint1.id == -1) {
                tempPoint1.id = this.pointList.length;
                this.pointList.push(tempPoint1);
            }
            if (tempPoint2.id == -1) {
                tempPoint2.id = this.pointList.length;
                this.pointList.push(tempPoint2);
            }

            let tempEdge0 = this.assetEdge(new CEdge(tempPoint0.id, tempPoint1.id));
            let tempEdge1 = this.assetEdge(new CEdge(tempPoint1.id, tempPoint2.id));
            let tempEdge2 = this.assetEdge(new CEdge(tempPoint2.id, tempPoint0.id));

            if (tempEdge0.id == -1) {
                tempEdge0.id = this.edgeList.length;
                this.edgeList.push(tempEdge0);
            }
            tempPoint0.listIdEdge.push(tempEdge0.id);
            tempPoint1.listIdEdge.push(tempEdge0.id);
            if (tempEdge1.id == -1) {
                tempEdge1.id = this.edgeList.length;
                this.edgeList.push(tempEdge1);
            }
            tempPoint1.listIdEdge.push(tempEdge1.id);
            tempPoint2.listIdEdge.push(tempEdge1.id);
            if (tempEdge2.id == -1) {
                tempEdge2.id = this.edgeList.length;
                this.edgeList.push(tempEdge2);
            }
            tempPoint2.listIdEdge.push(tempEdge2.id);
            tempPoint0.listIdEdge.push(tempEdge2.id);



            let tempTriangle = new CTriangle();
            tempTriangle.id = this.triTotal.length;
            tempTriangle.edgeIndex.push(tempEdge0.id);
            tempTriangle.edgeIndex.push(tempEdge1.id);
            tempTriangle.edgeIndex.push(tempEdge2.id);
            tempTriangle.pointIndex.push(tempPoint0.id);
            tempTriangle.pointIndex.push(tempPoint1.id);
            tempTriangle.pointIndex.push(tempPoint2.id);
            this.triTotal.push(tempTriangle);

            tempPoint0.listIdTri.push(tempTriangle.id);
            tempPoint1.listIdTri.push(tempTriangle.id);
            tempPoint2.listIdTri.push(tempTriangle.id);
            tempEdge0.listTri.push(tempTriangle.id);
            tempEdge1.listTri.push(tempTriangle.id);
            tempEdge2.listTri.push(tempTriangle.id);
            tempEdge0.numRef++;
            tempEdge1.numRef++;
            tempEdge2.numRef++;
        }

        for (let i = 0; i < this.edgeList.length; i++) {
            if (this.edgeList[i].numRef < 2) {
                this.edgeBandIndex.push(this.edgeList[i].id);
            }
        }
    }

    assetPoint(point) {
        for (let i = 0; i < this.pointList.length; i++) {
            const t = this.pointList[i];
            if (point.x == t.x && point.y == t.y) {
                point = this.pointList[i];
                break;
            }
        }
        return point;
    }

    assetEdge(edge) {
        let isNew = true;
        for (let i = 0; i < this.edgeList.length; i++) {
            let e = this.edgeList[i];
            if ((edge.endId == e.endId && edge.startId == e.startId) || (
                    edge.endId == e.startId && edge.startId == e.endId
                )) {
                edge = this.edgeList[i];
                isNew = false;
            }
        }
        return edge;
    }

    contourPointCalc(val, start, end) {
        let tempP = new CPoint(0, 0, val);
        let v0 = this.pointList[start].z;
        let v1 = this.pointList[end].z;
        let d = (v0 - val) * (v1 - val);
        let temp = (val - v0) / (v1 - v0);
        tempP.x = this.pointList[start].x + temp * (this.pointList[end].x - this.pointList[start].x);
        tempP.y = this.pointList[start].y + temp * (this.pointList[end].y - this.pointList[start].y);
        return tempP;

    }

    contourLineCalc() {
        for (let i = ((this.dMin+1) | 0); i < ((this.dMax) | 0); i++) {
            if (i % this.step == 0) {
                this.lineValue.push(i);
            }
        }
    }

    contourLineTrace() {
        this.contourLineCalc();

        for (let i = 0; i < this.lineValue.length; i++) {
            let conVal = this.lineValue[i];

            /*
            * 检查三角网中的三角边是否包含待追踪的等值边,并将包含等值点的三角形的编号保存在triChcekIndex中
            * */
            this.triCheckIndex.clear();
            for (let iTri = 0; iTri < this.triTotal.length; iTri++) {

                /*
                * 三角形的三个点的高程值
                * */
                const tempV0 = this.pointList[this.triTotal[iTri].pointIndex[0]].z;
                const tempV1 = this.pointList[this.triTotal[iTri].pointIndex[1]].z;
                const tempV2 = this.pointList[this.triTotal[iTri].pointIndex[2]].z;

                /*判断边上是否包含等值点,若包含则加入已检查列表* 下面两个判断相同*/
                if((tempV0 - conVal) * (tempV1 - conVal) <= 0) {
                    //console.log((tempV0 - conVal) * (tempV1 - conVal));
                    this.triCheckIndex.add(this.triTotal[iTri].id);
                    continue;
                }
                if((tempV1 - conVal) * (tempV2 - conVal) <= 0) {
                    //console.log((tempV1 - conVal) * (tempV2 - conVal));
                    this.triCheckIndex.add(this.triTotal[iTri].id);
                    continue;
                }
                if((tempV2 - conVal) * (tempV0 - conVal) <= 0) {
                    //console.log((tempV2 - conVal) * (tempV0 - conVal));
                    this.triCheckIndex.add(this.triTotal[iTri].id);
                    continue;
                }
            }
            /*包含等值点的三角形少于2个无法追踪,继续下一个等值点的追踪*/
            if (this.triCheckIndex.size < 2) {
                continue;
            }

            /*开始追踪开放的等高线*/
            for (let iBound = 0; iBound < this.edgeBandIndex.length; iBound++ ) {
                let edge = this.edgeBandIndex[iBound];
                let conLine = new CContourLine();
                if (this.isContourOnEdge(conVal, edge)) {
                    let conPoint = this.contourPointCalc(conVal, this.edgeList[edge].startId, this.edgeList[edge].endId);
                    conPoint.listIdEdge.push(edge);
                    conLine.listPoint.push(conPoint);

                    while (this.triCheckIndex.size > 0) {
                        /*在triChcekIndex中查找并删除包含等值点的三角形*/
                        let tri = this.searchTriangle(edge);
                        if (tri == -1) {
                            break;
                        }
                        let outEdge = this.traceTriangle(conVal, tri, edge);
                        if (outEdge != -1) {
                            edge = outEdge;
                            if (this.isContourOnEdge(conVal, outEdge)) {
                                let conOutPoint = this.contourPointCalc(conVal, this.edgeList[outEdge].startId, this.edgeList[outEdge].endId);
                                conOutPoint.listIdEdge.push(outEdge);
                                conLine.listPoint.push(conOutPoint);
                            }
                            if (this.edgeList[outEdge].numRef < 2) {
                                conLine.type = 0;
                                conLine.value = conVal;
                                console.log(conLine);
                                this.contourLine.push(conLine);
                                conLine = new CContourLine();
                                break;
                            }
                        }
                    }
                    if (this.triCheckIndex.size < 1) {
                        break;
                    }
                }
            }

            if (this.triCheckIndex.size > 2) {
                let tempEdgeIndex = -1;
                while (this.triCheckIndex.size > 0) {
                    let tri = null;
                    for (let x of this.triCheckIndex.values()) {
                        tri = x;
                        break;
                    }
                    this.triCheckIndex.delete(tri);
                    let conLine = new CContourLine();
                    let tempTri = this.triTotal[tri];
                    for (let j = 0; j < tempTri.edgeIndex.length; j++) {
                        if (this.isContourOnEdge(conVal, tempTri.edgeIndex[j])) {
                            tempEdgeIndex = tempTri.edgeIndex[j];
                            let conTempPoint = this.contourPointCalc(conVal, this.edgeList[tempEdgeIndex].startId, this.edgeList[tempEdgeIndex].endId);
                            conTempPoint.listIdEdge.push(tempEdgeIndex);
                            conLine.listPoint.push(conTempPoint);
                            break;
                        }
                    }

                    while (this.triCheckIndex.size > 0) {
                        let newTriangle = this.searchTriangle(tempEdgeIndex);
                        if (newTriangle == -1) {
                            let point = conLine.listPoint.slice(-1)[0];
                            conLine.type = 1;
                            if (point &&  this.isEdgeTriangleOnBand(point.listIdEdge[0])) {
                                conLine.type = 0;
                            }
                            conLine.value = conVal;
                            this.contourLine.push(conLine);
                            conLine = new CContourLine();
                            break;
                        }
                        let newEdge = this.traceTriangle(conVal, newTriangle, tempEdgeIndex);
                        if (newEdge != -1) {
                            tempEdgeIndex = newEdge;
                            if (this.isContourOnEdge(conVal, newEdge)) {
                                let conTempPoint = this.contourPointCalc(conVal, this.edgeList[tempEdgeIndex].startId, this.edgeList[tempEdgeIndex].endId);
                                conTempPoint.listIdEdge.push(tempEdgeIndex);
                                conLine.listPoint.push(conTempPoint);
                            }
                        }
                        if (this.triCheckIndex.size == 0) {
                            let point = conLine.listPoint.slice(-1)[0];
                            conLine.type = 1;
                            if (point &&  this.isEdgeTriangleOnBand(point.listIdEdge[0])) {
                                conLine.type = 0;
                            }
                            conLine.value = conVal;
                            //console.log(conLine);
                            this.contourLine.push(conLine);
                            conLine = new CContourLine();
                            break;
                        }
                    }
                }
            }

        }
        return this.contourLine;

    }

    isEdgeTriangleOnBand(edgeId) {
        console.log('checking');
        let edge = this.edgeList[edgeId];
        for (let t = 0; t < edge.listTri.length; t++) {
            let tri = this.triTotal[edge.listTri[t]];
            for (let i = 0; i < tri.edgeIndex.length; i++) {
                if (this.edgeList[tri.edgeIndex[i]].numRef < 2) {
                    return true;
                }
            }
        }
        return false;
    }


    isContourOnEdge(value, edgeIndex) {
        let edge = this.edgeList[edgeIndex];
        let P1 = this.pointList[edge.startId];
        let P2 = this.pointList[edge.endId];

        let d = (P1.z - value) * (P2.z - value);
        //console.log(d);
        if (d == 0) {
            for (let i = 0; i < this.pointList.length; i++) {
                if (Math.abs(this.pointList[i].z - value) < 0.00000001) {
                    this.pointList[i].z += 0.0001;
                }
            }
            return true;
        }
        else if (d < 0) {
            return true;
        }
        else {
            return false;
        }
    }

    searchTriangle(edgeIndex) {
        let edge = this.edgeList[edgeIndex];
        for (let i = 0; i < edge.listTri.length; i++) {
            if (this.triCheckIndex.has(edge.listTri[i])) {
                this.triCheckIndex.delete(edge.listTri[i]);
                return edge.listTri[i];
            }
        }
        return -1;
    }

    traceTriangle(contourValue, TriIndex, edgeIndex) {
        let triangle = this.triTotal[TriIndex];
        let tempEdge = [];
        tempEdge.push(this.edgeList[triangle.edgeIndex[0]]);
        tempEdge.push(this.edgeList[triangle.edgeIndex[1]]);
        tempEdge.push(this.edgeList[triangle.edgeIndex[2]]);
        for (let i = 0;i < tempEdge.length; i++) {
            let edge = tempEdge[i];
            if (edge.id != edgeIndex) {
                let d = (this.pointList[edge.startId].z - contourValue) *
                    (this.pointList[edge.endId].z - contourValue);
                if (d <= 0) {
                    return edge.id;
                }
            }
        }
        return -1;
    }
}

export default ContourTrance;


