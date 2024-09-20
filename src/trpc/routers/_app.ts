import { mergeRouters } from "../init";
import { getRestaurantsRouter } from "./getRestaurants";
import { getRestaurantRouter } from "./getRestaurant";
import { addFavoriteRouter } from "./addFavorite";

export const appRouter = mergeRouters(
  getRestaurantsRouter,
  getRestaurantRouter,
  addFavoriteRouter
);

export type AppRouter = typeof appRouter;
