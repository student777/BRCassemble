function check() {
    function log() {
        var json = JSON.parse(this.responseText);
        document.getElementById('output').innerText = json.users.map(u => u.name).join(', ');
    }
    ajax("/BRCassemble/server/data.json", log);
}

function ajax(url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", callback);
    oReq.open("GET", url);
    oReq.send();
}