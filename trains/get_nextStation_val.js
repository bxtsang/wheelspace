var data = JSON.parse(msg.payload);
var nextStation = global.get("nextStation")
var door = 1;

if (data[nextStation] === null) {
    msg.payload = 0;
    return msg
}

try {
    var val = data[nextStation][door];
} catch (error) {
    msg.payload = 0;
    return msg;
}

msg.payload = val;
return msg;