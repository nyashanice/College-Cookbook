const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Meal {
    _id: ID
    title: String
    ingredients: [String]!
    steps: [String]!
  }

  type Query {
    meals: [Meal]!
    meal(mealId: ID!): Meal
  }

  type Mutation {
    addMeal(title: String!, ingredients: [String]!, steps: [String]!, tips: [String], creator: String): Meal
    removeMeal(mealId: ID!): Meal
  }
`;

module.exports = typeDefs;
