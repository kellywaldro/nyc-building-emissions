mapboxgl.accessToken = 'pk.eyJ1Ijoia3dhbGRyb24iLCJhIjoiY2xkbnF4ZjlxMDBtZjN2cHJsYzR0N3M5MCJ9.i0ML2GPOcH-tOOgugnk9nA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kwaldron/clk8ej9jk02xc01pacqlmh9kg',
    zoom: 10,
    center: [-74, 40.725],
    maxZoom: 15,
    minZoom: 8,
    maxBounds: [[-74.45, 40.45], [-73.55, 41]]
});
