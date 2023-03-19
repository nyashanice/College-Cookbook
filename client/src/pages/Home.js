import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryList from "../components/CategoryList";
import { useQuery } from "@apollo/client";

const Home = () => {
  const { loading, data } = useQuery();
  const categories = data?.categories || [];

  return (
    <main>
      <Header />
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>
              <h1>FEATURED</h1>
              <div>
                <img></img>
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
        )}
      </div>
      <Footer />
    </main>
  );
};
