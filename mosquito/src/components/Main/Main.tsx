import React from "react";
import classes from "./main.module.css";
import Banner from "../Banner/Banner";
import Nets from "../Nets/Nets";
import NetsTypes from "../NetsTypes/NetsTypes";

const Main: React.FC = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.mainContent}>
          <Banner />
          <div className={classes.container}>
            <Nets />
            <NetsTypes />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
