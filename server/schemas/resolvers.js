const { Meal } = require("../models");

const resolvers = {
  Query: {
    meals: async () => {
      return Meal.find();
    },

    meal: async (parent, { mealId }) => {
      return Meal.findOne({ _id: mealId });
    },
  },

  Mutation: {
    addMeal: async (parent, { title, ingredients, steps }) => {
      return Meal.create({ title, ingredients, steps });
    },
    removeMeal: async (parent, { mealId }) => {
      return Meal.findOneAndDelete({ _id: mealId });
    },
    // updateMeal: async (parent, { mealId, ingredients, steps }) => {
    //   return Meal.findOneAndUpdate(
    //     { _id: mealId },
    //     { $addToSet: { ingredients, steps } }
    //   );
    // },
  },
};

module.exports = resolvers;
