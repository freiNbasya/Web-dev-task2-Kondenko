const express = require("express");
const cors = require("cors");
const handlerPage1 = require("./handlers/getPage1");
const handlerPage2 = require("./handlers/getPage2");
const handlerFile = require("./handlers/getFile");
const handlerBirds = require("./handlers/getBirds");
const handlerTypeBirds = require("./handlers/getTypeBirds");
const handlerIdTypeBirds = require("./handlers/getIdTypeBirds");
const handlerInfo = require("./handlers/getInfo");
const app = express();
const port = 4000;
const whitelist = [
    "http://localhost:4000",
];
const corsOptions = {
    origin: originFunction,
};

function originFunction(origin, callback) {
    if (whitelist.includes(origin) || !origin) {
        callback(null, true);
    } else {
        callback(new Error("Not allowed by CORS"));
    }
}

app.use(cors(corsOptions));
app.get("/page1", handlerPage1);
app.get("/page2", handlerPage2);
app.get("/file/:filename", handlerFile);
app.get("/objects", handlerBirds);
app.get("/objects/:type", handlerTypeBirds);
app.get("/objects/:type/:id", handlerIdTypeBirds);
app.get("/info", handlerInfo);

app.listen(port, () => {
    console.log(`Server listens to port ${port}`);
});
