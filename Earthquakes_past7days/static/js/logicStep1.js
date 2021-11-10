// Add console.log to check to see if our code is working.
console.log("working");



// // We create the tile layer that will be the background of our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     // tileSize: 512,
//     // zoomOffset: -1,
//     accessToken: API_KEY
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
//let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// then we add our 'streets' tile layer to the map.
//streets.addTo(map);
//light.addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/RosalieMaass/Mapping_Earthquakes/main/majorAirports.json";
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/RosalieMaass/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
//let torontoHoods = "https://raw.githubusercontent.com/RosalieMaass/Mapping_Earthquakes/main/torontoNeighborhoods.json";

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
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }

// d3.json(torontoData).then(function(data) {
//   console.log(data);
//   //creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//     layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
//     + feature.properties.dst + "</h3>");
//     }
//   })
//   .addTo(map);
// });

// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
//   L.geoJSON(data, {
//     color: "blue",
//     fillColor: "yellow",
//     weight: 1, 
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h3> Area Name: " + feature.properties.areaName + "</h3> <hr><h3> Destination: "
//       + feature.properties.dst + "</h3>");
//       }
//     })
//   .addTo(map);
//   });
   
  // Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});