const sendImage = require("./send/sendImage");
const sendAudio = require("./send/sendAudio");
const sendTxt = require("./send/sendTxt");

function handlerFile(req, res) {
    const file = req.params.filename;
    let path = "./assets/" + file;
    const ext = file.split(".")[1];

    switch (ext) {
        case "png":
            sendImage(path, req, res);
            break;
        case "mp3":
            sendAudio(path, req, res);
            break;
        case "txt":
            sendTxt(path, req, res);
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("404 Not Found");
    }
}

module.exports = handlerFile;
