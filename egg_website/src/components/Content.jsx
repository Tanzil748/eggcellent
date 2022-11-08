import React from "react";
import { egg1, egg2 } from "../assets";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={egg1}
          alt="egg one"
          className="h-full rounded mb-20 mx-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2"> Carton of Egg</h2>
          <p className="mb-2"> Cold, Fresh, Eggy</p>
          <span>$10.00</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={egg2}
          alt="egg two"
          className="h-full rounded mb-20 mx-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2"> Patch of Eggs</h2>
          <p className="mb-2"> Eggs for the Entire Family</p>
          <span>$15.00</span>
        </div>
      </div>
    </>
  );
};

export default Content;
