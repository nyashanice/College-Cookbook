import { gql } from "graphql-tag";

export const QUERY_MEAL = gql`
  query oneMeal($title: String!) {
    meal(title: $title) {
      _id
      title
      category
    }
  }
`;

export const QUERY_MEALS = gql`
  query allMeals {
    meals {
      _id
      title
      category
    }
  }
`;
