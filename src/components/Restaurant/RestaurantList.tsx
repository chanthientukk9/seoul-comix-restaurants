"use server";
import { trpc } from "@/trpc/server";
import RestaurantCard from "./RestaurantCard";
import css from "./RestaurantList.module.css";

async function RestaurantList() {
  const result = await trpc.getRestaurants();

  return (
    <div className={css.root}>
      {result.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantList;
