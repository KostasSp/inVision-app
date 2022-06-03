const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 5000;
const postAPI = require("./postAPI");
const getAPI = require("./getAPI");
const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use("/postAPI", postAPI);
app.use("/getAPI", getAPI);
app.listen(port, () => console.log(`App listening on port ${port}`));
