import { mergeRouters } from "../init";
import { getRestaurantsRouter } from "./getRestaurants";
import { getRestaurantRouter } from "./getRestaurant";
import { addFavoriteRouter } from "./addFavorite";
import { getCategoriesRouter } from "./getCategories";

export const appRouter = mergeRouters(
  getRestaurantsRouter,
  getRestaurantRouter,
  addFavoriteRouter,
  getCategoriesRouter
);

export type AppRouter = typeof appRouter;
