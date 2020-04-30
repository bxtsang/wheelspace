if(msg.payload.id == "e3f3625f3109"){
    msg.payload = msg.payload.eddystoneUrl.url.split("=")[1]
    return msg;
}