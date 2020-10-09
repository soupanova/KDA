const {query} = require("./db/index");

async function readTable() {
    let res =  await query(
    `SELECT * FROM recipes_table`)
     return res
   }
 

   module.exports = { readTable }