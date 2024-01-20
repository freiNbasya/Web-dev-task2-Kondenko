const ducks = require("../data/ducks.js");
const geese = require("../data/geese.js");
const hens = require("../data/hens.js");

function handlerBirds(req, res) {
    birds = ducks.concat(geese, hens)
    res.json(birds);
}
module.exports = handlerBirds;