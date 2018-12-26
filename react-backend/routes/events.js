const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
  user: "bbc",
  host: "localhost",
  database: "bbc",
  password: "123456",
  port: "5432"
});

// console.log("I'm inside events.js file!");
router.get("/", function(req, res, next) {
  // console.log("I'm in router.get | distributionevents.js");
  res.json([
    {
      id: 1,
      username: "DEEE"
    }
  ]);
});

// let deliver = [];
// async function firstConn() {
//   console.log("I'm in firstCount()");

//   try {
//     const result = await pool.query(
//       'select * from "DistributionEvent" where "DistributionEventID" = 14'
//     );
//     deliver = result.rows;
//     console.log(deliver);
//     pool.end();
//   } catch (err) {
//     console.log(err);
//   }
// }

module.exports = router;
