"use client";
import classNames from "classnames";
import css from "./ImageCarousel.module.css";
import { useState } from "react";
import Image from "next/image";

type TImage = { id: number | string; url: string };

type TImageCarouselProps = {
  images?: TImage[];
  className?: string;
};

export default function ImageCarousel({
  images,
  className,
}: TImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState(images?.[0]);

  const handleChangeImage = (img: TImage) => () => {
    console.log('chu img', {...img})
    setSelectedImage(img);
  };

  const classes = classNames(css.root, className);
  return (
    <div className={classes}>
      {!!selectedImage?.url && (
        <Image
          fill={true}
          className={css.image}
          src={selectedImage.url}
          alt={`Cover for product`}
        />
      )}
      {!!images && images.length > 1 && (
        <div className={css.indicatorsWrapper}>
          <div className={css.indicators}>
            {images.map((image) => (
              <div
                className={classNames(css.indicator, {
                  [css.selectedIndicator]: selectedImage?.id === image.id,
                })}
                key={image.id}
                onClick={handleChangeImage(image)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
