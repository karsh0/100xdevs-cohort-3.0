//writing complete authentication using jwt
//If the tokens are leaked then the user details can be accessed by anyone
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const path = require('path')
const JWT_SECRET = "random123";

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.json());

let users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "user signed up",
  });
  console.log(users);
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find((u) => {
    if (u.username == username) {
      return u;
    } else {
      return false;
    }
  });

  if (user) {
    let token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    user.token = token;

    res.json({
      token: token,
    });
  }
});

app.get("/me", function (req, res) {
  let token = req.headers.token;
  let verifiedUser = jwt.verify(token, JWT_SECRET);
  let username = verifiedUser.username;

  const user = users.find((u) => {
    if (u.username == username) {
      return u;
    } else {
      return false;
    }
  });

  if (user) {
    res.json({
      username: user.username,
      password: user.password,
    });
  }
  else{
    res.json({
        message:'Invalid token'
    })
  }
});

app.listen(3000);
