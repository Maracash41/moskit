import React from "react";
import classes from "./main.module.css";
import Banner from "../Banner/Banner";

const Main: React.FC = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.mainContent}>
          <Banner />
          <div className={classes.container}></div>
        </div>
      </main>
    </>
  );
};

export default Main;
