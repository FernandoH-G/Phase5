const express = requier("express");
const router = express.Router();

router.get("/dist_events", (req, res, next) => {
  console.log("I'm in router.get | distributionevents.js");
  res.json([
    {
      id: 1,
      username: "DEEEEEEE"
    }
  ]);
});

module.exports = router;
