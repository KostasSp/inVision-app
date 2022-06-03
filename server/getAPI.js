const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/", async (req, res) => {
  await fetch(
    "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
  )
    .then((res) => res.json())
    .then((data) => res.send(data));
});

module.exports = router;
