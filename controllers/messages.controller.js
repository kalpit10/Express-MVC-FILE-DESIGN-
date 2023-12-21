const path = require("path");

function getMessages(req, res) {
  // .. is to move up one folder
  path.join(__dirname, "..", "public", "skimountain.jpg");
  res.sendFile("skimountain.jpg");
  // res.send("<ul><li>Hello Kalpit!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating Messages");
}

module.exports = {
  getMessages,
  postMessage,
};
