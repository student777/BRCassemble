function hereiam(){
    var num = document.getElementById('input').value;
    navigator.geolocation.watchPosition(position => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        ajax('/server', {
            lat: lat,
            lng: lng,
            phoneNum: num,
        });
    });
}

function ajax(url, params, callback) {
    // TODO
    var div = document.getElementById('output');
    div.innerText = params.phoneNum + ': ' + params.lat + ', ' + params.lng
};