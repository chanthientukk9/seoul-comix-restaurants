"use client";
import { trpc as utilTrpc } from "@/utils/trpc";
import classNames from "classnames";
import Image from "next/image";
import heartOutlineIcon from "./assets/heart-outline.png";
import heartIcon from "./assets/heart.png";
import css from "./FavoriteButton.module.css";
import { useState } from "react";
import { unstable_noStore as noStore } from 'next/cache';

type TFavoriteButtonProps = {
  className?: string;
  isFavorite?: boolean;
  restaurantId: string;
};

function FavoriteButtonComp({
  className,
  isFavorite,
  restaurantId,
}: TFavoriteButtonProps) {
  noStore();
  const [localLiked, setLocalLiked] = useState(isFavorite);
  const addFavorite = utilTrpc.addFavorite.useMutation({
    async onSuccess() {
      setLocalLiked(!localLiked);
    },
  });

  const handleLikeRestaurant = () => {
    addFavorite.mutateAsync({ restaurantId });
  };

  const classes = classNames(css.root, className);

  return (
    <div className={classes} onClick={handleLikeRestaurant}>
      <div className={css.favorite}>
        {localLiked ? (
          <Image
            fill={true}
            className={css.favoritedIcon}
            src={heartIcon}
            alt={`favorite`}
          />
        ) : (
          <Image
            fill={true}
            className={css.favoriteIcon}
            src={heartOutlineIcon}
            alt={`not yet favorite`}
          />
        )}
      </div>
    </div>
  );
}

const WrappedComp = utilTrpc.withTRPC(FavoriteButtonComp);

export default function FavoriteButton(props: TFavoriteButtonProps) {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  return <WrappedComp {...props as any} />;
}
