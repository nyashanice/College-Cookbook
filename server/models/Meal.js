const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: String,
    required: true,
    trim: true,
  },
  steps: {
    type: String,
    required: true,
  },
  //   create reaction portion that allows users to click a button to react (like social media)
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
