const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "SECRET";

mongoose.connect();
const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });
  res.json({
    message: "signup success",
  });
});
app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  console.log(user);

  if (user) {
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
    res.json({
      message: "logged in",
      token: token,
    });
  } else {
    res.json({
      message: "Invalid credentials",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (!decodedData) {
    res.json({ message: "incorrect token" });
  }
  try {
    if (decodedData) {
      req.userId = decodedData.id;
      next();
    }
  } catch (e) {
    console.log(e);
  }
}
app.use(auth);

app.post("/todo", async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;

  await TodoModel.create({
    userId,
    title,
    description,
    status,
  });
  res.json({
    message: "todo created",
    userId: userId,
  });
});
app.get("/todos", async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId
  });


  res.json({
    todos,
  });
});

app.listen(3000);
