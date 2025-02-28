import React from "react";
import classes from "./netTypes.module.css";
import TypeCard from "../TypeCard/TypeCard";
import img1 from "./img/setka_antikoshka.jpg";
import img2 from "./img/setka_standart.jpg";
import img3 from "./img/setka_antimoshka.jpg";
import img4 from "./img/setka_antipil.jpg";

const NetTypes: React.FC = () => {
  return (
    <section className={classes.netTypes}>
      <div className={classes.container}>
        <div className={classes.netTypesContent}>
          <h2 className={classes.sectionTitle}>Типы Полотен</h2>
          <div className={classes.netTypesCards}>
            <TypeCard
              name={"АнтиКошка"}
              image={img1}
              size={`1.5х1.0мм`}
              description={`Полотно сетки специально усилено нитями высокой прочности и армированными уголками, чтобы его не могли повредить кошки и другие домашние любимцы.`}
              characteristics={[
                {
                  name: "Светопропускание",
                  value: 80,
                },
                {
                  name: "Прочность",
                  value: 90,
                },
              ]}
              cost={"500 руб. м2"}
            />
            <TypeCard
              name={"Стандарт"}
              image={img2}
              size={`1.2х1.2мм`}
              description={`Универсальные полотна, сделанные из материалов высокого качества. Защитят не только от мошек, но и от тополиного пуха. При этом их легко очищать.`}
              characteristics={[
                {
                  name: "Светопропускание",
                  value: 80,
                },
                {
                  name: "Прочность",
                  value: 60,
                },
              ]}
              cost={"500 руб. м2"}
            />
            <TypeCard
              name={"АнтиМошка"}
              image={img3}
              size={`0.8х0.8мм`}
              description={`Идеальный выбор, если дом стоит рядом с проезжей частью. Сетка защитит не только от насекомых, но и от дорожной пыли.`}
              characteristics={[
                {
                  name: "Светопропускание",
                  value: 80,
                },
                {
                  name: "Прочность",
                  value: 90,
                },
              ]}
              cost={"500 руб. м2"}
            />
            <TypeCard
              name={"АнтиПыль"}
              image={img4}
              size={`1.2х0.2мм`}
              description={`Отличный выбор для аллергиков – сетка делается из материала, который задерживает любые частицы, способные вызвать аллергическую реакцию.`}
              characteristics={[
                {
                  name: "Светопропускание",
                  value: 80,
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
