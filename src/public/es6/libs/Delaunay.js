/**
 *
 * @authors 祝志颖 (c0de4ac@baicizhan.com)
 * @date    2016-03-5 15:12
 * @version 1.0.0
 */

var EPSILON = 1.0 / 1048576.0;

export default class Delaunay {


    supertriangle(vertices) {
        var xmin = Number.POSITIVE_INFINITY,
            ymin = Number.POSITIVE_INFINITY,
            xmax = Number.NEGATIVE_INFINITY,
            ymax = Number.NEGATIVE_INFINITY,
            i, dx, dy, dmax, xmid, ymid;

        for(i = vertices.length; i--; ) {
            if(vertices[i][0] < xmin) xmin = vertices[i][0];
            if(vertices[i][0] > xmax) xmax = vertices[i][0];
            if(vertices[i][1] < ymin) ymin = vertices[i][1];
            if(vertices[i][1] > ymax) ymax = vertices[i][1];
        }

        dx = xmax - xmin;
        dy = ymax - ymin;
        dmax = Math.max(dx, dy);
        xmid = xmin + dx * 0.5;
        ymid = ymin + dy * 0.5;

        return [
            [xmid - 20 * dmax, ymid -      dmax],
            [xmid            , ymid + 20 * dmax],
            [xmid + 20 * dmax, ymid -      dmax]
        ];
    }

    circumcircle(vertices, i, j, k) {
        var x1 = vertices[i][0],
            y1 = vertices[i][1],
            x2 = vertices[j][0],
            y2 = vertices[j][1],
            x3 = vertices[k][0],
            y3 = vertices[k][1],
            fabsy1y2 = Math.abs(y1 - y2),
            fabsy2y3 = Math.abs(y2 - y3),
            xc, yc, m1, m2, mx1, mx2, my1, my2, dx, dy;

        /* Check for coincident points */
        if(fabsy1y2 < EPSILON && fabsy2y3 < EPSILON)
            throw new Error("Eek! Coincident points!");

        if(fabsy1y2 < EPSILON) {
            m2  = -((x3 - x2) / (y3 - y2));
            mx2 = (x2 + x3) / 2.0;
            my2 = (y2 + y3) / 2.0;
            xc  = (x2 + x1) / 2.0;
            yc  = m2 * (xc - mx2) + my2;
        }

        else if(fabsy2y3 < EPSILON) {
            m1  = -((x2 - x1) / (y2 - y1));
            mx1 = (x1 + x2) / 2.0;
            my1 = (y1 + y2) / 2.0;
            xc  = (x3 + x2) / 2.0;
            yc  = m1 * (xc - mx1) + my1;
        }

        else {
            m1  = -((x2 - x1) / (y2 - y1));
            m2  = -((x3 - x2) / (y3 - y2));
            mx1 = (x1 + x2) / 2.0;
            mx2 = (x2 + x3) / 2.0;
            my1 = (y1 + y2) / 2.0;
            my2 = (y2 + y3) / 2.0;
            xc  = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
            yc  = (fabsy1y2 > fabsy2y3) ?
            m1 * (xc - mx1) + my1 :
            m2 * (xc - mx2) + my2;
        }

        dx = x2 - xc;
        dy = y2 - yc;
        return {i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy};
    }

    dedup(edges) {
        var i, j, a, b, m, n;

        for(j = edges.length; j; ) {
            b = edges[--j];
            a = edges[--j];

            for(i = j; i; ) {
                n = edges[--i];
                m = edges[--i];

                if((a === m && b === n) || (a === n && b === m)) {
                    edges.splice(j, 2);
                    edges.splice(i, 2);
                    break;
                }
            }
        }
    }

    triangulate(vertices)  {
        var n = vertices.length, i, j, indices, st, open, closed, edges, dx, dy, a, b, c;
        /* 离散点数小于3 无法生存三角网 */
        if(n < 3)
            return [];

        /*拷贝原生数据,避免对原生数据进行修改*/
        vertices = vertices.slice(0);

        /*保存离散的数据的编号*/
        indices = new Array(n);

        for(i = n; i--; )
            indices[i] = i; //按照原始数据的数组中的位置进行编号

        indices.sort(function(i, j) {
            return vertices[j][0] - vertices[i][0];
            //对原始数据按X坐标排序,实际上是对编号进行了排序.
        });
        /*计算一个初始的超三角形,该三角形包含了所有的离散点*/
        st = this.supertriangle(vertices);
        vertices.push(st[0], st[1], st[2]);

        /* 这里用两个列表保存三角形, open表保存待检测的三角形, closed表保存已经检测的三角形*/
        open   = [this.circumcircle(vertices, n + 0, n + 1, n + 2)]; //初始只有超三角形待检测
        closed = [];
        edges  = []; //保存新生成的三角形的边

        // 逐点循环插入三角网
        for(i = indices.length; i--; edges.length = 0) {
            c = indices[i]; //当前待插入点的编号
            console.log(vertices[c][0]);

            /* 对于每一个待检测的三角形, 判断当前点是否在其外接圆内
             * 如果当前点在圆内,则移除该三角形,并与插入的生成新的三角形,讲新三角形的边保存在edges内
             */
            for(j = open.length; j--; ) {
                /* 优化, 当前x坐标最小的点都在外接圆外部,后面不需要对该三角形进行检查
                 * 将其从open表删除,加入clode表 */
                dx = vertices[c][0] - open[j].x;
                if(dx > 0.0 && dx * dx > open[j].r) {
                    closed.push(open[j]);
                    open.splice(j, 1);
                    continue;
                }
                /* 如果待插入的店在外部,则不生成新三角形. */
                dy = vertices[c][1] - open[j].y;
                if(dx * dx + dy * dy - open[j].r > EPSILON)
                    continue;
                /* 保存当前三角形的边到edge表 */
                edges.push(
                    open[j].i, open[j].j,
                    open[j].j, open[j].k,
                    open[j].k, open[j].i
                );
                open.splice(j, 1); //从open表删除三角形
            }
            /* 删除重复的边 */
            this.dedup(edges);

            /* 对于每一条边,都与待插入点连接生成新三角形,并插入open表 */
            for(j = edges.length; j; ) {
                b = edges[--j];
                a = edges[--j];
                open.push(this.circumcircle(vertices, a, b, c));
            }
        }
        /* 由于没有待插入点 open表存在的三角形已不需要检查了,将其插入close表,并从open表删除 */
        for(i = open.length; i--; )
            closed.push(open[i]);
        open.length = 0;
        /*
        * 删除包含超级三角形顶点的三角形
        * */
        for(i = closed.length; i--; )
            if(closed[i].i < n && closed[i].j < n && closed[i].k < n)
                open.push(closed[i].i, closed[i].j, closed[i].k);


        return open;
    }

    contains(tri, p)  {
        /* Bounding box test first, for quick rejections. */
        if((p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0]) ||
            (p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0]) ||
            (p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1]) ||
            (p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]))
            return null;

        var a = tri[1][0] - tri[0][0],
            b = tri[2][0] - tri[0][0],
            c = tri[1][1] - tri[0][1],
            d = tri[2][1] - tri[0][1],
            i = a * d - b * c;

        /* Degenerate tri. */
        if(i === 0.0)
            return null;

        var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
            v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

        /* If we're outside the tri, fail. */
        if(u < 0.0 || v < 0.0 || (u + v) > 1.0)
            return null;

        return [u, v];
    }
}

/*(function() {
    "use strict";

    var EPSILON = 1.0 / 1048576.0;

    function supertriangle(vertices) {
        var xmin = Number.POSITIVE_INFINITY,
            ymin = Number.POSITIVE_INFINITY,
            xmax = Number.NEGATIVE_INFINITY,
            ymax = Number.NEGATIVE_INFINITY,
            i, dx, dy, dmax, xmid, ymid;

        for(i = vertices.length; i--; ) {
            if(vertices[i][0] < xmin) xmin = vertices[i][0];
            if(vertices[i][0] > xmax) xmax = vertices[i][0];
            if(vertices[i][1] < ymin) ymin = vertices[i][1];
            if(vertices[i][1] > ymax) ymax = vertices[i][1];
        }

        dx = xmax - xmin;
        dy = ymax - ymin;
        dmax = Math.max(dx, dy);
        xmid = xmin + dx * 0.5;
        ymid = ymin + dy * 0.5;

        return [
            [xmid - 20 * dmax, ymid -      dmax],
            [xmid            , ymid + 20 * dmax],
            [xmid + 20 * dmax, ymid -      dmax]
        ];
    }

    function circumcircle(vertices, i, j, k) {
        var x1 = vertices[i][0],
            y1 = vertices[i][1],
            x2 = vertices[j][0],
            y2 = vertices[j][1],
            x3 = vertices[k][0],
            y3 = vertices[k][1],
            fabsy1y2 = Math.abs(y1 - y2),
            fabsy2y3 = Math.abs(y2 - y3),
            xc, yc, m1, m2, mx1, mx2, my1, my2, dx, dy;

        // Check for coincident points
        if(fabsy1y2 < EPSILON && fabsy2y3 < EPSILON)
            throw new Error("Eek! Coincident points!");

        if(fabsy1y2 < EPSILON) {
            m2  = -((x3 - x2) / (y3 - y2));
            mx2 = (x2 + x3) / 2.0;
            my2 = (y2 + y3) / 2.0;
            xc  = (x2 + x1) / 2.0;
            yc  = m2 * (xc - mx2) + my2;
        }

        else if(fabsy2y3 < EPSILON) {
            m1  = -((x2 - x1) / (y2 - y1));
            mx1 = (x1 + x2) / 2.0;
            my1 = (y1 + y2) / 2.0;
            xc  = (x3 + x2) / 2.0;
            yc  = m1 * (xc - mx1) + my1;
        }

        else {
            m1  = -((x2 - x1) / (y2 - y1));
            m2  = -((x3 - x2) / (y3 - y2));
            mx1 = (x1 + x2) / 2.0;
            mx2 = (x2 + x3) / 2.0;
            my1 = (y1 + y2) / 2.0;
            my2 = (y2 + y3) / 2.0;
            xc  = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
            yc  = (fabsy1y2 > fabsy2y3) ?
            m1 * (xc - mx1) + my1 :
            m2 * (xc - mx2) + my2;
        }

        dx = x2 - xc;
        dy = y2 - yc;
        return {i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy};
    }

    function dedup(edges) {
        var i, j, a, b, m, n;

        for(j = edges.length; j; ) {
            b = edges[--j];
            a = edges[--j];

            for(i = j; i; ) {
                n = edges[--i];
                m = edges[--i];

                if((a === m && b === n) || (a === n && b === m)) {
                    edges.splice(j, 2);
                    edges.splice(i, 2);
                    break;
                }
            }
        }
    }

    Delaunay = {
        triangulate: function(vertices, key) {
            var n = vertices.length,
                i, j, indices, st, open, closed, edges, dx, dy, a, b, c;


            if(n < 3)
                return [];


            vertices = vertices.slice(0);

            if(key)
                for(i = n; i--; )
                    vertices[i] = vertices[i][key];


            indices = new Array(n);

            for(i = n; i--; )
                indices[i] = i;

            indices.sort(function(i, j) {
                return vertices[j][0] - vertices[i][0];
            });


            st = supertriangle(vertices);
            vertices.push(st[0], st[1], st[2]);


            open   = [circumcircle(vertices, n + 0, n + 1, n + 2)];
            closed = [];
            edges  = [];


            for(i = indices.length; i--; edges.length = 0) {
                c = indices[i];


                for(j = open.length; j--; ) {

                    dx = vertices[c][0] - open[j].x;
                    if(dx > 0.0 && dx * dx > open[j].r) {
                        closed.push(open[j]);
                        open.splice(j, 1);
                        continue;
                    }


                    dy = vertices[c][1] - open[j].y;
                    if(dx * dx + dy * dy - open[j].r > EPSILON)
                        continue;


                    edges.push(
                        open[j].i, open[j].j,
                        open[j].j, open[j].k,
                        open[j].k, open[j].i
                    );
                    open.splice(j, 1);
                }

                dedup(edges);


                for(j = edges.length; j; ) {
                    b = edges[--j];
                    a = edges[--j];
                    open.push(circumcircle(vertices, a, b, c));
                }
            }


            for(i = open.length; i--; )
                closed.push(open[i]);
            open.length = 0;

            for(i = closed.length; i--; )
                if(closed[i].i < n && closed[i].j < n && closed[i].k < n)
                    open.push(closed[i].i, closed[i].j, closed[i].k);


            return open;
        },
        contains: function(tri, p) {

            if((p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0]) ||
                (p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0]) ||
                (p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1]) ||
                (p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]))
                return null;

            var a = tri[1][0] - tri[0][0],
                b = tri[2][0] - tri[0][0],
                c = tri[1][1] - tri[0][1],
                d = tri[2][1] - tri[0][1],
                i = a * d - b * c;


            if(i === 0.0)
                return null;

            var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
                v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

            if(u < 0.0 || v < 0.0 || (u + v) > 1.0)
                return null;

            return [u, v];
        }
    };

    if(typeof module !== "undefined")
        module.exports = Delaunay;
})();
*/