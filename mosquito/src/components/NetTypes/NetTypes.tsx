import React from "react";
import classes from "./netTypes.module.css";
import TypeCard from "../TypeCard/TypeCard";
import img1 from "./img/setka_standart.jpg";

const NetTypes: React.FC = () => {
  return (
    <section className={classes.netTypesTypes}>
      <div className={classes.container}>
        <div className={classes.netTypesContent}>
          <h2 className={classes.sectionTitle}>Типы Полотен</h2>
          <div className={classes.netTypeCards}>
            <TypeCard
              name={"АнтиКошка"}
              image={img1}
              size={`1.5х1.0мм`}
              description={`Полотно сетки специально усилено нитями высокой прочности и армированными уголками, чтобы его не могли повредить кошки и другие домашние любимцы.`}
              characteristics={[
                {
                  name: "Светопропускание",
                  value: 5,
                },
                {
                  name: "Прочность",
                  value: 90,
                },
              ]}
              cost={"500 руб. м2"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetTypes;
