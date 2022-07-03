const express = require("express");
const { connect } = require("mongoose");
const app = express();
require("dotenv").config();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname + "/resources")));
app.use(require("cors")({ origin: "*" }));

connect(process.env.DB_URI)
  .then(() => {
    console.log(`Connected to DB`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({ msg: "Hello there!", status: "ok" });
});

app.use("/api/v1/accounts", require("./router/account"));
app.use("/api/v1/consumers", require("./router/consumers"));
app.use("/api/v1/orders", require("./router/orders"));
app.use("/api/v1/books", require("./router/books"));

app.listen(process.env.PORT, () => {
  console.log(`Server was started!`);
});
