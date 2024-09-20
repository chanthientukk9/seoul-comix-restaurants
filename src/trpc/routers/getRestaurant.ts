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
        include: {
          category: true,
          images: true,
          featured: true,
        },
      });

      return {
        restaurant,
      };
    }),
});

const createCaller = createCallerFactory(getRestaurantRouter);
 
export const getRestaurantCaller = createCaller({});