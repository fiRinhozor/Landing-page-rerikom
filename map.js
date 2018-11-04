ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.70, 52.34],
        zoom: 13,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([55.70782818, 52.34459454], {

    });
    map.geoObjects.add(placemark);
}