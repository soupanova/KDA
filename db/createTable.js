const { query } = require("./index");

console.log(query);

async function createTable() {
  let res = await query(
    `CREATE TABLE recipes_table
    (id SERIAL PRIMARY KEY, 
        title VARCHAR(50), 
        ingredients TEXT, 
        instructions TEXT, 
        img_url TEXT)` 
  )
  console.log(res);
}

createTable();
