import { RouterOutput } from "@/trpc/server";
import css from "./RestaurantCard.module.css";
import Image from "next/image";
import stars02Icon from "./assets/star-02.png";
import starIcon from "./assets/star.png";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import FavoriteButton from "./FavoriteButton";

type TRestaurantCardProps = {
  restaurant: RouterOutput["getRestaurants"]["restaurants"][number];
};

export default function RestaurantCard({ restaurant }: TRestaurantCardProps) {
  const { id, images, featured, name, rating, rating_count } = restaurant || {};

  return (
    <div className={css.root}>
      {id && (
        <FavoriteButton
          className={css.favoriteWrapper}
          isFavorite={restaurant?.is_favorite}
          restaurantId={id}
        />
      )}
      <ImageCarousel className={css.imageWrapper} images={images} />
      {featured && (
        <div className={css.featuredTag}>
          {featured.icon === "stars-02" && (
            <div className={css.featuredStarsWrapper}>
              <Image
                fill={true}
                className={css.featuredStars}
                src={stars02Icon}
                alt={`featured item`}
              />
            </div>
          )}
          {featured.text}
        </div>
      )}
      <div className={css.nameContainer}>
        <div className={css.name}>{name}</div>
        <div className={css.rating}>
          <div className={css.ratingStarWrapper}>
            <Image
              fill={true}
              className={css.ratingStar}
              src={starIcon}
              alt={`rating star`}
            />
          </div>
          {rating} ({rating_count})
        </div>
      </div>
      <p className={css.description}>{restaurant?.desc}</p>
      <div className={css.bottomContent}>
        <span>{restaurant?.city.toUpperCase()}</span>
        <span>&middot;</span>
        <span>{restaurant?.category.description}</span>
        <span>&middot;</span>
        <span>{restaurant?.price_range} 만원</span>
      </div>
    </div>
  );
}
