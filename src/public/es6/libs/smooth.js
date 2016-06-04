import CContourLine from './contour/contourline'
import CPoint from './contour/point'
var cardinal_spline_js = require('cardinal-spline-js');
var b_spline_js = require('b-spline');


export default class Smooth {

    static b_spline(contours) {
        let smoothed_contours = [];
        contours.forEach((contour) => {
            let points = contour.listPoint;
            if (points.length <= 2) {
                smoothed_contours.push(contour);
                return;
            }
            let evel = contour.value;
            let inpts = [];
            let smoothed_contour = new CContourLine(evel);
            smoothed_contour.type = contour.type;
            for (let i = 0; i < points.length; i++) {
                inpts.push([points[i].x, points[i].y]);
            }
            if (contour.type == 1) {
                inpts.push([points[0].x, points[0].y]);
            }
            for (let i = 0; i < 1; i += 0.01) {
                let outpts = b_spline_js(i, 3, inpts);
                let pt = new CPoint(outpts[0], outpts[1], evel);
                smoothed_contour.listPoint.push(pt);
            }
            smoothed_contours.push(smoothed_contour);
        });
        return smoothed_contours;
    }

    static cardinal_spline(contours) {
        let smoothed_contours = [];
        contours.forEach((contour) => {
            let points = contour.listPoint;
            if (points.length <= 2) {
                smoothed_contours.push(contour);
                return ;
            }
            let evel = contour.value;
            let inpts = [];
            let smoothed_contour = new CContourLine(evel);
            smoothed_contour.type = contour.type;
            for (let i = 0; i < points.length; i++) {
                inpts.push(points[i].x);
                inpts.push(points[i].y);
            }
            let outpts = cardinal_spline_js.getCurvePoints(inpts, 0.05, 20);
            for (let i = 0; i < outpts.length; i += 2) {
                let pt = new CPoint(outpts[i], outpts[i + 1], evel);
                smoothed_contour.listPoint.push(pt);
            }
            smoothed_contours.push(smoothed_contour);
        });
        return smoothed_contours;
    }
}