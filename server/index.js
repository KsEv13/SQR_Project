const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const PORT = 3003;
const SALT_ROUNDS = 3;
const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());

const users = {};
const LOGIN_SEPAROTOR = ";";

const authMiddleware = async (req, res, next) => {
  if (req.headers.authorization) {
    const authToken = Buffer.from(
      req.headers.authorization,
      "base64"
    ).toString();
    const [login, hash] = authToken.split(LOGIN_SEPAROTOR);
    if (login && hash && login in users) {
      const result = await new Promise((resolve) =>
        bcrypt.compare(login, hash, function (err, result) {
          resolve(result);
        })
      );
      if (result) {
        next();
        return;
      }
    }
  }
  res.status(401).end();
};

app.get("/info", authMiddleware, (req, res) => {
  return true;
});

app.post("/login", (req, res) => {
  if (req.body.login in users && req.body.password === users[req.body.login]) {
    bcrypt.hash(req.body.login, SALT_ROUNDS, function (err, hash) {
      res.status(200).json({
        token: Buffer.from(
          `${req.body.login}${LOGIN_SEPAROTOR}${hash}`
        ).toString("base64"),
      });
    });
    return;
  }
  res.status(401).json({ message: "Invalid login or password" });
});

app.post("/register", (req, res) => {
  if (req.body.login in users) {
    res.status(400).json({
      message: "Login already exists",
    });
  } else if (!req.body.login || !req.body.password) {
    res.status(400).json({
      message: "Login and password required",
    });
  } else {
    users[req.body.login] = req.body.password;
    res.status(200).end();
  }
});

app.listen(PORT, () =>
  console.log(`Server is starting from http://localhost:${PORT}`)
);
