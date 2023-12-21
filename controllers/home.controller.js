function homeMessage(req, res) {
  //sends a string response in a format other than json(XML, CSV, plain text etc.)
  res.send("Hello!");
}

module.exports = {
  homeMessage,
};
