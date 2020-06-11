const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.get("/:id", (req, res) => {
  // TODO: redirect to url
});

app.get("/url/:id", (req, res) => {
  // TODO: get info about url
});

app.post("/url", (req, res) => {
  // TODO: create shortened url
});

const port = process.env.PORT || 2089;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
