function get_time() {
    var hours = '';
    var ap = '';
    var now = new Date();
    if (now.getHours() > 12) {
        hours = now.getHours() - 12;
        ap = ' PM';
    }
    else if (now.getHours() == 0) {
        hours = 12;
        ap = ' AM';
    }
    else if (now.getHours() <= 12) {
        hours = now.getHours();
        if (now.getHours() == 12) {
            ap = " PM";
        }
        else if (now.getHours() < 12) {
            ap = " AM";
        }
    }
    var lmao = now.getMinutes() + " minutes and " + now.getSeconds() + " seconds past " + hours + ap;
    document.getElementById('time').innerHTML = lmao;
}
var okok = setInterval(get_time, 1000);
