const path = require("path");
const express = require("express");
const app = express();
const port = process.env.port || 5000;
const { populateTable } = require("./db/populateTable");
const { readTable } = require("./index");

app.use(express.static("public"));
app.use(express.json());

const data = [
  {
    title: "Beans on Toast",
    ingredients: ["150g of beans", "150g of butter", "150g of toast"],
    instructions: `Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.
  
    Season to taste.`,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg",
  },
];

app.get("/api/recipes", async (req, res) => {
  console.log("Refreshed!");
  let arr = readTable()
  console.log(await arr);
  res.json({ payload: await arr });
});

app.post("/api/recipes", async (req, res) => {
  console.log(req.body);
  populateTable(req.body);
  res.json({ message: `I got'chu` });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.listen(port, () => {
  console.log(`App is listening, http://localhost:${port}`);
});
