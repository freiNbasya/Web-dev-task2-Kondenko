const fs = require("fs");
function sendImage(path, req, res) {
    fs.readFile(path, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.write(data);
        return res.end();
    })
}
module.exports = sendImage;