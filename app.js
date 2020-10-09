const path = require("path");
const express = require("express");
const app = express();
const port = process.env.port || 5000;
const { recipes } = require("./api/recipes");

app.use(express.static("public"));
app.use(express.json());

// write a get request

app.get("/api/recipes", async (req, res) => {
  const allRecipes = await recipes();
  console.log("Refreshed!");
  res.json({ payload: allRecipes });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.listen(port, () => {
  console.log(`App is listening, http://localhost:${port}`);
});

app.post("/api/recipes", async (req, res) => {
  const allRecipes = await recipes();
  allRecipes.push(req.body);
  console.log(allRecipes);
});
