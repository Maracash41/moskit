import React, { useEffect, useState } from "react";
import classes from "./gallery.module.css";

interface IGallery {
  images: IImage[];
}

interface IImage {
  id: number;
  image: string;
  imageAlt: string;
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  const [currentPreviewImages, setCurrentPreviewImages] =
    useState<IImage[]>(images);

  const [mainImage, setMainImage] = useState<IImage>(() => {
    return currentPreviewImages.length > 0
      ? currentPreviewImages[currentPreviewImages.length - 1]
      : { id: 0, image: "", imageAlt: "Нет изображения" };
  });

  const clickOnImage = (id: number) => {
    const clickedImage = currentPreviewImages.find((img) => img.id === id);

    if (!clickedImage) return;
    setMainImage(clickedImage);
    setCurrentPreviewImages((prev) => {
      const updatedImages = prev.filter((img) => img.id !== id);
      updatedImages.push(clickedImage);
      return updatedImages;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (mainImage.id === 1) {
        clickOnImage(currentPreviewImages.length);
      } else {
        clickOnImage(mainImage.id - 1);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [mainImage.id]);

  return (
    <div className={classes.gallery}>
      <div className={classes.galleryContent}>
        <div className={classes.mainImageContainer}>
          <img
            src={mainImage.image}
            alt={mainImage.imageAlt}
            className={classes.galleryImage}
          />
        </div>
        <div className={classes.previewImagesContainer}>
          {currentPreviewImages.map((img, i) => {
            if (i < 4)
              return (
                <div className={classes.previewImageContainer} key={img.id}>
                  <img
                    src={img.image}
                    alt={img.imageAlt}
                    className={classes.galleryImage}
                    onClick={() => clickOnImage(img.id)}
                  />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
