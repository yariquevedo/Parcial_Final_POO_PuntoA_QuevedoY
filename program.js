// Crear el mapa centrado en las coordenadas del barrio
var map = L.map('map').setView([4.6179, -74.1608], 16); // Coordenadas aproximadas del centro del barrio

// Cargar el mapa base vectorial (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador al mapa
L.marker([4.6179, -74.1608]).addTo(map)
    .bindPopup("¡Estamos en el Barrio Los Periodistas!")
    .openPopup();
