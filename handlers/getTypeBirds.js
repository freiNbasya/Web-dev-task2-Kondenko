const ducks = require("../data/ducks.js");
const geese = require("../data/geese.js");
const hens = require("../data/hens.js");

const types = {
    "ducks": ducks,
    "geese": geese,
    "hens": hens
}

function handlerTypeBirds(req, res) {
    const type = req.params.type
    if (types[type]) {
        res.json(types[type])
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
    }

}
module.exports = handlerTypeBirds;