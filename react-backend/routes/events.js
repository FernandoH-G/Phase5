var bodyParser = require("body-parser");
const express = require("express");
const { Pool } = require("pg");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/*
router.post("/", function(req, res, next) {
  const pool = new Pool({
    user: "bbc",
    host: "localhost",
    database: "bbc",
    password: "123456",
    port: "5432"
  });

  async function queryDE() {
    let events = [];
    let sd = req.body.sdate;
    let ed = req.body.edate;

    try {
      const result = await pool.query(
        'select * from distInfo where "Date" between $1 and $2',
        [sd, ed]
      );
      events = result.rows;
      console.log(events);
      pool.end();
    } catch (err) {
      console.log(err);
    }
    res.send(events);
  }

  queryDE();
});
*/
module.exports = router;
