const styles = [
    new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255,255,255,0.4)'
        }),
        stroke: new ol.style.Stroke({
            color : 'rgba(0,0,0,1)',
            width : 1
        }),
        image: new ol.style.Circle({
                fill: new ol.style.Fill({color: 'rgba(0,0,0,1)'}),
                radius: 2
            }
        )

    })
];

export default styles;