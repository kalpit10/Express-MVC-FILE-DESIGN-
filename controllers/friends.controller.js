const model = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  //sends a json response
  res.json(model);
}

function getFriend(req, res) {
  //+ is used to convert a string into a number.. We could have also done Number(req.params.friendId)
  const friendId = +req.params.friendId;
  const friend = model[friendId];
  if (friend) {
    //always convert this in json format
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend Does Not Exist!",
    });
  }
}

module.exports = {
  postFriend,
  getFriend,
  getFriends,
};
