const db = require("../config/connection");
const { Meal } = require("../models");
const mealSeeds = require("./mealSeeds.json");

db.once("open", async () => {
  await Meal.deleteMany({});
  await Meal.create(mealSeeds);

  console.log("all done!");
  process.exit(0);
});
