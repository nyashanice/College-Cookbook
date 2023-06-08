import React from "react";
import CategoryList from "../components/CategoryList";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const Home = () => {
  // const { loading } = useQuery();
  // const categories = data?.categories || [];

  return (
      <div>
        {/* {loading ? (
          <div>Loading...</div>
        ) : ( */}
          <div>
            <div>
              <h1>FEATURED</h1>
              <div>
                <img alt=""></img>
                <div>
                  <h3>Name of dish</h3>
                  <p>Description</p>
                  <Link></Link>
                </div>
              </div>
            </div>
            <div>
              <h1>Choose a category below or view all dishes</h1>
              <CategoryList />
            </div>
          </div>
        {/* )} */}
      </div>
  );
};

export default Home;
