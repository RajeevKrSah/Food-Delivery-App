"use client";

import React, { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";
import RestaurantHeader from "../_components/restaurantHeader";
import "./style.css"
import Footer from "../_components/footer";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <RestaurantHeader />
      <div className="container">
        <h1>Restaurant login/signup page</h1>

        {login ? <RestaurantLogin /> : <RestaurantSignUp />}

        <div>
          <button
            className="button-link"
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login
              ? "Do not have account? SignUp"
              : "Already have account? Login"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
