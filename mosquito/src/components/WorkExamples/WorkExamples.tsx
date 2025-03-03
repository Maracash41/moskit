import React from "react";
import classes from "./workExamples.module.css";
import Gallery from "../Gallery/Gallery";
import galleryImg1 from "./img/gallery_1.jpg";
import galleryImg2 from "./img/gallery_2.jpg";
import galleryImg3 from "./img/gallery_3.jpg";
import galleryImg4 from "./img/gallery_4.jpg";
import galleryImg5 from "./img/gallery_5.jpg";

const WorkExamples: React.FC = () => {
  return (
    <section className={classes.workExamples}>
      <div className={classes.container}>
        <div className={classes.workExamplesContent}>
          <h2 className={classes.sectionTitle}>Примеры Работ</h2>
          <Gallery
            images={[
              { id: 1, image: galleryImg1, imageAlt: "image 1" },
              {
                id: 2,
                image: galleryImg2,
                imageAlt: "image 2",
              },
              {
                id: 3,
                image: galleryImg3,
                imageAlt: "image 3",
              },
              {
                id: 4,
                image: galleryImg4,
                imageAlt: "image 4",
              },
              {
                id: 5,
                image: galleryImg5,
                imageAlt: "image 5",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExamples;
