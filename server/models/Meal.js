const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: [String],
    required: true,
    trim: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  tips: {
    type: [String],
    required: false,
  },
  creator: {
    type: String,
    required: true,
  },
  // category: [
  //   {
  //     type: Schema.Types.String,
  //     ref: "category",
  //   },
  // ],
  category: {
    type: String,
    required: true,
  },
  //   add images of meal
  //   create reaction portion that allows users to click a button to react (like social media)
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
