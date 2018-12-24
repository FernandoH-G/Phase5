const express = require("express");
// const app = express();
var router = express.Router();
// const { Pool, Client } = require("pg");

// const pool = new Pool({
//   user: "bbc",
//   host: "localhost",
//   database: "bbc",
//   password: "123456",
//   port: "5432"
// });

router.get("/dist_events", function(req, res, next) {
  console.log("I'm in router.get | distributionevents.js");
  res.json([
    {
      id: 1,
      username: "DEEE"
    }
  ]);
});
// router.get("/api/dist_events", function(req, res, next) {
//   console.log("I'm in router.get | distributionevents.js");
//   res.json([
//     {
//       id: 1,
//       username: "DEEE"
//     }
//   ]);
// });

// const port = 5000;
// app.listen(port, () => console.log(`Server started on port${port}`));

// console.log("I'm in router.get | distributionevents.js");
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
