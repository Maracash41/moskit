import React from "react";
import classes from "./netsTypes.module.css";

const NetsTypes: React.FC = () => {
  return (
    <section className={classes.netsTypesTypes}>
      <div className={classes.container}>
        <div className={classes.netsTypesContent}>
          <h2 className={classes.sectionTitle}>Типы Полотен</h2>
        </div>
      </div>
    </section>
  );
};

export default NetsTypes;
