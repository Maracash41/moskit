import React from "react";
import classes from "./nets.module.css";
import ProductCard from "../ProductCard/ProductCard";
import featuresImg1 from "../../assets/img/features_img_1.jpg";

const Nets: React.FC = () => {
  return (
    <section className={classes.nets}>
      <div className={classes.netsContent}>
        <h2 className={classes.sectionTitle}>Варианты сеток</h2>

        <div className={classes.netsCards}>
          <ProductCard
            image={featuresImg1}
            name="АнтиВандал"
            description="Сочетает в себе все преимущества стандартной сетки, но имеет усиленные антивандальные крепления. Идеальный вариант для 1ых этажей"
            price="от 500 руб м2"
            features={[
              "Простой уход",
              "Надёжность",
              "Усиленный профиль",
              "Защищён от кражи",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Nets;
