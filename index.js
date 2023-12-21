const express = require("express");

// const homeController = require("./controllers/home.controller");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const app = express();

const PORT = 4000;

app.use(express.static("public"));
app.use(express.json());

//THIS IS A PART OF MODEL VIEW CONTROLLER(Just to make the code look easier and understandable)..............

// app.get("/", homeController.homeMessage);

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

//MIDDLEWARE
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  //to ensure express passes the request to the correct handler
  next();
});

app.listen(PORT, function (req, res) {
  console.log(`LISTENING on ${PORT}!`);
});
