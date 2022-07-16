import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/home.css"
import { HomeProduct } from "./homeProduct";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <div className="container" style={{ paddingBottom: '5%' }}>
          <HomeProduct category={"men"} />
          <HomeProduct category={"women"} />
          <HomeProduct category={"kids"} />
        </div>
      </div>
    </React.Fragment>
  );
};
