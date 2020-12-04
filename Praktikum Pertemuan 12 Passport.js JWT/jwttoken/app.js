const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "akses API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "rahasia", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "post dibuat",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  //user data
  const user = {
    id: 1,
    username: "irvan",
    email: "irvan@belajarit.com",
  };
  jwt.sign({ user: user }, "rahasia", { expiresIn: "7d" }, (err, token) => {
    res.json({
      token,
    });
  });
});

//format token
//authorization : Bearer <access_token>

//verifikasi fungsi
function verifyToken(req, res, next) {
  //get header
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    // split header
    const bearer = bearerHeader.split(" ");
    //get token
    const bearerToken = bearer[1];
    //set token
    req.token = bearerToken;
    //next middleware
    next();
  } else {
    //unauthorization
    res.sendStatus(403);
  }
}

app.listen(3000, () => console.log(`server berjalan pada port 3000`));
