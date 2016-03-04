
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
                geometry: new ol.geom.Point([source[i][3], source[i][2]]),
                name: source[i][0]
            });
            feature.getGeometry().set('z', source[i][4]);
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
            let x = parseFloat(source[i][3]);
            let y = parseFloat(source[i][2]);
            let z = parseFloat(source[i][4]);
            collection.push([x, y, z]);
        }
        console.info(collection);
        return collection;
    }
}