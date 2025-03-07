// Crear el mapa centrado en las coordenadas del barrio
var map = L.map('map').setView([4.6179, -74.1608], 16); // Coordenadas aproximadas del centro del barrio

// Cargar el mapa base vectorial (OpenStreetMap)
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Cargar el mapa base satelital (Mapbox, con un token de acceso)
var satelliteLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Crear un polígono del barrio
var coordenadas_poligono = [
    [4.615448, -74.162570],
    [4.618104474798026, -74.16408815941685],
    [4.620599305873595, -74.16003243501254],
    [4.619525143569841, -74.15875777877119],
    [4.619790796764165, -74.15672991656902],
    [4.616710219264334, -74.15624910541582]
];

L.polygon(coordenadas_poligono, { color: 'blue', weight: 3, fillOpacity: 0.5 }).addTo(map);

// Barra deslizante para alternar entre capas
var slider = L.control.slider({
    position: 'topright',
    min: 0,
    max: 1,
    step: 1,
    value: 0,
    slide: function(value) {
        if (value === 0) {
            map.removeLayer(satelliteLayer);
            map.addLayer(osmLayer);
        } else {
            map.removeLayer(osmLayer);
            map.addLayer(satelliteLayer);
        }
    }
}).addTo(map);
