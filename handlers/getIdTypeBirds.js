const ducks = require("../data/ducks.js");
const geese = require("../data/geese.js");
const hens = require("../data/hens.js");

const types = {
    "ducks": ducks,
    "geese": geese,
    "hens": hens
}

function handlerIdTypeBirds(req, res) {
    const type = req.params.type
    const id = req.params.id
    if (types[type]) {
        specific_obj = types[type].find((object) => object.id == id);
        res.json(specific_obj)
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
    }

}
module.exports = handlerIdTypeBirds;