const sendPage = require("./send/sendPage");
function handlerPage1(req, res) {
    sendPage("./assets/test-page.html", req, res);
}

module.exports = handlerPage1;