import { gql } from "graphql-tag";

export const ADD_MEAL = gql`
  mutation addMeal(
    $title: String!
    $ingredients: [String]!
    $steps: [String]!
    $tips: [String]
    $creator: String
    $category: String!
  ) {
    addMeal(
      title: $title
      ingredients: $ingredients
      steps: $steps
      tips: $tips
      creator: $creator
      category: $category
    ) {
      _id
      title
      ingredients
      steps
      tips
      creator
      category
    }
  }
`;
