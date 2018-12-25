const express = require("express");
const router = express.Router();

/* GET users listing. */
// is 'activated' when a get request is made in the root(/) directory.
router.get("/", function(req, res, next) {
  // res.send('respond with a resource');
  console.log("I'm in router.get | users.js");

  res.json([
    {
      id: 1,
      username: "samsepi0l"
    },
    {
      id: 2,
      username: "D0loresH4ze"
    },
    {
      id: 3,
      username: "FERNANDO is DOG"
    }
  ]);
  // console.log("I do not terminate after res.json! in router.get | users.js");
});

module.exports = router;
