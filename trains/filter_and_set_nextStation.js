if (msg.payload.id == "e8d16e1cdc04") {
    msg.payload = msg.payload.eddystoneUrl.url.split("=")[1];
    global.set("nextStation", msg.payload);
    return msg;
}