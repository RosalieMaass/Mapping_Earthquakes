// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFreature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup(feature.properties.location);
//    }
// }).addTo(map);


// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [light, dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// then we add our 'streets' tile layer to the map.
//streets.addTo(map);
light.addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/RosalieMaass/Mapping_Earthquakes/main/majorAirports.json";
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/RosalieMaass/Mapping_Earthquakes/main/torontoRoutes.json";


//Grabbin our GeoJSON data
// d3.json(airportData).then(function(data) {
//   console.log(data);
//   //creating a GeoJSON layer with the retrieved data
//   L.geoJSON(data, {
//     onEachFeature: function (feature, layer) {
//       layer.bindPopup("<h2>" + feature.properties.name + ", " + feature.properties.id + '</h2>')
//     }
//   .addTo(map);
// });

// d3.json(airportData).then(function(data) {
//   console.log(data);
//   //creating a GeoJSON layer with the retrieved data
//   L.geoJSON(data, {
//     onEachFeature: function (feature, properties) {
//     bindPopup("<h2>" + feature.properties.name + ", " + feature.properties.id + '</h2>')
//     }
//   .addTo(map);
// });

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

d3.json(torontoData).then(function(data) {
  console.log(data);
  //creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
    layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
    + feature.properties.dst + "</h3>");
    }
  })
    // onEachFeature: function(feature, layer) {
    // layer.bindPopup("<h2>" + feature.properties.name + ", " + feature.properties.id + "</h2>");
    // }
  .addTo(map);
});