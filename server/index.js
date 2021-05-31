require('dotenv').config();
const path = require("path");
const express = require("express");
const cors = require('cors');


const PORT = process.env.PORT || 3001;

const indexRouter = require('./routes/index.routes');
const aboutMeRouter = require('./routes/aboutMe.routes');
const photographyRouter = require('./routes/photography.routes');
const socialInfoRouter = require('./routes/socialInfo.routes');
const { sendUserRequest } = require('./config/nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use('/', indexRouter);
app.use('/data/aboutMe', aboutMeRouter);
app.use('/data/photography', photographyRouter);
app.use('/data/socialInfo', socialInfoRouter);
app.use('/user-request', sendUserRequest)

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
