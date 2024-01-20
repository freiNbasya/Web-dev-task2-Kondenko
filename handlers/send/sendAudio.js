const fs = require("fs");
function sendAudio(path, req, res) {
    fs.readFile(path, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
        res.write(data);
        return res.end();
    })
}
module.exports = sendAudio;