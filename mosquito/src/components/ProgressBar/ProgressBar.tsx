import React from "react";
import classes from "./progressBar.module.css";

interface IProgressbar {
  value: number;
}

const ProgressBar: React.FC<IProgressbar> = ({ value }) => {
  const filledCells = value < 10 ? 1 : Math.floor(value / 10);
  return (
    <div className={classes.progressBar}>
      {Array.from({ length: 10 }).map((_, i) => {
        return i + 1 > filledCells ? (
          <span
            key={i}
            className={
              classes.progressBarCell + " " + classes.progressBarCellEmpty
            }
          ></span>
        ) : (
          <span
            key={i}
            className={
              classes.progressBarCell + " " + classes.progressBarCellFill
            }
          ></span>
        );
      })}
    </div>
  );
};

export default ProgressBar;
