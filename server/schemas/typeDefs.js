const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Meal {
    _id: ID
    title: String!
    ingredients: [String]!
    steps: [String]!
    tips: [String]
    creator: String
    category: String!
  }

  type Query {
    meals: [Meal]!
    meal(title: String!): Meal
  }

  type Mutation {
    addMeal(
      title: String!
      ingredients: [String]!
      steps: [String]!
      tips: [String]
      creator: String
      category: String!
    ): Meal
    removeMeal(mealId: ID!): Meal
  }
`;

module.exports = typeDefs;
