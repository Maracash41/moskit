import React from "react";
import classes from "./nets.module.css";
import ProductCard from "../ProductCard/ProductCard";

const Nets: React.FC = () => {
  return (
    <section className={classes.nets}>
      <div className={classes.netsContent}>
        <h2 className={classes.sectionTitle}>Варианты сеток</h2>

        <div className={classes.netsCards}>
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Nets;
