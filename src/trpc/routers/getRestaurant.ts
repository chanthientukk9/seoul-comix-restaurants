import { z } from "zod";
import { baseProcedure, createCallerFactory, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";

export const getRestaurantRouter = createTRPCRouter({
  getRestaurant: baseProcedure
    .input(
      z.object({
        restaurantId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { restaurantId } = input;
      const restaurant = await prisma.restaurant.findUnique({
        where: { id: restaurantId },
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
        restaurant,
      };
    }),
});

const createCaller = createCallerFactory(getRestaurantRouter);

export const getRestaurantCaller = createCaller({});
