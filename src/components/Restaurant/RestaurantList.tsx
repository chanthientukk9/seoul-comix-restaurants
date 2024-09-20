"use server";
import { trpc } from "@/trpc/server";
import RestaurantCard from "./RestaurantCard";
import css from "./RestaurantList.module.css";

type TRestaurantListProps = {
  category?: string;
  keywords?: string;
};

async function RestaurantList({ category, keywords }: TRestaurantListProps) {
  const result = await trpc.getRestaurants({ category, keywords });

  return (
    <div className={css.root}>
      {result.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
