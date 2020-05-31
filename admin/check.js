function check() {
    function log() {
        var json = JSON.parse(this.responseText);
        document.getElementById('output').innerText = json.sort((a, b) => a.name.localeCompare(b.name)).map(u => u.name).join(', ');
    }
    ajax("/BRCassemble/server/admin.user.list.json", log);
}

function ajax(url, callback) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", callback);
    oReq.open("GET", url);
    oReq.send();
}

function addMember() {
    var name = document.getElementById('name').value;
    document.getElementById('output').innerText += ", " + name;
    document.getElementById('name').value = '';
}