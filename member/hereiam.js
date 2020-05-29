function getLocation() {
    navigator.geolocation.watchPosition(function(position) {
        printLocation(position.coords.latitude, position.coords.longitude);
    });
}

function printLocation(lat, lng) {
    var div = document.getElementById('output');
    div.innerText = lat + '/' + lng;
}