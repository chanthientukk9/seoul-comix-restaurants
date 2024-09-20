import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";
import { getRestaurantCaller } from "./getRestaurant";

export const addFavoriteRouter = createTRPCRouter({
  addFavorite: baseProcedure
    .input(
      z.object({
        restaurantId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { restaurantId } = input;
      const restaurant = await getRestaurantCaller.getRestaurant({
        restaurantId,
      });
      const updatedRestaurant = await prisma.restaurant.update({
        where: { id: restaurantId },
        data: {
          is_favorite: !restaurant.restaurant?.is_favorite,
        },
        select: {
          id: true,
          name: true,
          is_favorite: true,
          desc: true,
          price_range: true,
          rating: true,
          rating_count: true,
          city: true,
          images: {
            select: {
              id: true,
              url: true,
            },
          },
          category: {
            select: {
              name: true,
              description: true,
            },
          },
          featured: {
            select: {
              icon: true,
              text: true,
            },
          },
        },
      });

      return {
        restaurant: updatedRestaurant,
      };
    }),
});
