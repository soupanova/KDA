const { query } = require("./db/index");

async function readTable() {
  let res = await query(`SELECT * FROM recipes_table`);
  console.log(res.rows)
  return res.rows;
}

module.exports = { readTable };
