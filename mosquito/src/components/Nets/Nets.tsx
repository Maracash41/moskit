import React from "react";
import classes from "./nets.module.css";
import ProductCard from "../ProductCard/ProductCard";
import featuresImg1 from "./img/features_img_1.jpg";

const Nets: React.FC = () => {
  return (
    <section className={classes.nets}>
      <div className={classes.container}>
        <div className={classes.netsContent}>
          <h2 className={classes.sectionTitle}>Варианты сеток</h2>

          <div className={classes.netsCards}>
            <ProductCard
              image={featuresImg1}
              name="АнтиПад"
              description="Сверхпрочная сетка с защитой от падений: 32-мм каркас + усиленные антивандальными креплениями. Устойчива к погодным условиям, вандализму и механическим повреждениям. Надёжно фиксируется, исключая падение, даже при сильном воздействии."
              price="от 500 руб м2"
              features={[
                "Высокая прочность",
                "Надёжность",
                "Усиленный профиль",
                "Защищён от кражи",
              ]}
            />
            <ProductCard
              image={featuresImg1}
              name="Стандарт"
              description="Стандартная сетка, тонкая рамка и прозрачное полотно не нарушают
дизайн интерьера. Оптимальное сочетание стоимости и качества. Пропускает большое количество воздух, сохраняя прохладу даже в жару."
              price="от 500 руб м2"
              features={[
                "Доступная цена",
                "Эстетика",
                "Погодоустойчивость ",
                "Простой уход",
              ]}
            />

            <ProductCard
              image={featuresImg1}
              name="АнтиВандал"
              description="Сочетает в себе все преимущества стандартной сетки, но имеет усиленные антивандальные крепления. Идеальный вариант для 1ых этажей."
              price="от 500 руб м2"
              features={[
                "Простой уход",
                "Надёжность",
                "Эстетика",
                "Защищён от кражи",
              ]}
            />
            <ProductCard
              image={featuresImg1}
              name="Персонализированная"
              description="Доступные комбинации рамок с полотнами антикошка, антипыль, антиптица. Легко устанавливать даже на больших и высоких проёмах с поперечной рамой импост."
              price="от 700 руб м2"
              features={[
                "Высокая прочность",
                "Надёжность",
                "Усиленный профиль",
                "Защищён от кражи",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nets;
