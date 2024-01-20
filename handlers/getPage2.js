const sendPage = require("./send/sendPage");
function handlerPage2(req, res) {
  sendPage("./assets/test-page2.html", req, res);
}

module.exports = handlerPage2;