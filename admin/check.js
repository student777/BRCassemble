function check() {
    ajax("/BRCassemble/server/admin.run.latest.json", (res) => {
        var json = JSON.parse(res);
        document.getElementById('output').innerText = json.users.sort((a, b) => a.name.localeCompare(b.name)).map(u => u.name).join(', ');
    });
}

function addMember() {
    var name = document.getElementById('name').value;
    document.getElementById('output').innerText += ", " + name;
    document.getElementById('name').value = '';
}

function ajax(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status) {
            var res = httpRequest.responseText;
            callback(res);
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
};

function prevRunning() {
    var run_list = document.getElementById('run_list');
    ajax("/BRCassemble/server/admin.run.list.json", (res) => {
        var json = JSON.parse(res);
        json.forEach(r => {
            var child = document.createElement('span');
            child.innerText = r.name + '@' + r.time;
            run_list.appendChild(child);
        })
    });
}