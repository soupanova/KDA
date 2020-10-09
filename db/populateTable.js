const { query } = require("./index");
//console.log(query);

const text = `INSERT INTO recipes_table(title, ingredients, instructions, img_url)
VALUES($1, $2, $3, $4) 
RETURNING *`;

async function populateTable(newData) {
  console.log("we be populating");
  console.log(newData.ingredients.length);
  for (let i = 0; i < newData.length; i++) {
    let res = await query(text, [
      newData[i].title,
      [newData[i].ingredients],
      newData[i].instructions,
      newData[i].image,
    ]);
  }
}

module.exports = { populateTable }
