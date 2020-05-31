function hereiam(phoneNum){
    var watchID = navigator.geolocation.watchPosition(position => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var obj = {
            lat: lat,
            lng: lng,
            phoneNum: phoneNum,
        };
        ajax('/BRCassemble/server/member.login.json', obj, (res) => {
            navigator.geolocation.clearWatch(watchID);
        });
    });
}

function ajax(url, params, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status) {
            var res = httpRequest.responseText;
            var username = JSON.parse(res).name;
            document.getElementById('loginbox').innerHTML = "<img src='/BRCassemble/res/done.png'/><span>hello " + username +"!(출첵완료)</span>";
            callback();
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
};

function phone() {
    var phoneNum = parseInt(prompt("휴대폰 뒷번호 4자리를 입력하세요"));
    if (phoneNum > 1000 && phoneNum < 9999) {
        hereiam(phoneNum);
    } else {
        alert('다시 입력하세요');
    }
}

function kakao() {
    alert('아직 준비중...');
}