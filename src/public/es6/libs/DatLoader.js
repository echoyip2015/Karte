
export default class DatLoader {

    static read(source) {
        var collection = new ol.Collection();
        if (source.length <= 0) {
            return collection;
        }
        for (let i = 0; i < source.length; i++) {
            if (source[i].length < 4) {
                continue;
            }
            let feature = new ol.Feature({
                geometry: new ol.geom.Point([parseFloat(source[i][2]), parseFloat(source[i][3]), parseFloat(source[i][4]) ], 'XYZ'),
                name: source[i][0]
            });
            feature.getGeometry().set('z', parseFloat(source[i][4]));
            collection.push(feature);
        }
        console.info(collection);
        return collection;
    }

    static readRaw(source) {
        var collection = new Array();
        if (source.length <= 0) {
            return collection;
        }
        for (let i = 0; i < source.length; i++) {
            if (source[i].length < 4) {
                continue;
            }
            let x = parseFloat(source[i][2]);
            let y = parseFloat(source[i][3]);
            let z = parseFloat(source[i][4]);
            collection.push([x, y, z]);
        }
        console.info(collection);
        return collection;
    }

    static readFeatures(features) {
        var collection = new Array();
        if (features.length <= 0) {
            return collection;
        }
        features.forEach((feature)=> {
            let geom = feature.getGeometry();
            let cord = geom.getCoordinates();

            let x = parseFloat(cord[0]);
            let y = parseFloat(cord[1]);
            let z = parseFloat(geom.get('z') || 0);
            if (cord.length == 3) {
                z = parseFloat(cord[2]);
            }
            collection.push([x, y, z]);
        });
        console.info(collection);
        return collection;
    }
}