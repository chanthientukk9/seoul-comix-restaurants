import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";

export const getRestaurantsRouter = createTRPCRouter({
  getRestaurants: baseProcedure
    .query(async () => {
      const restaurants = await prisma.restaurant.findMany({
        include: {
          category: true,
          images: true,
          featured: true,
        },
        orderBy: {
          rating: 'desc',
        },
      });

      return {
        restaurants,
      };
    }),
});
