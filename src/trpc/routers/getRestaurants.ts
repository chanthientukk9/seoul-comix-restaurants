import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";

export const getRestaurantsRouter = createTRPCRouter({
  getRestaurants: baseProcedure.query(async () => {
    const restaurants = await prisma.restaurant.findMany({
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
      orderBy: {
        rating: "desc",
      },
    });

    return {
      restaurants,
    };
  }),
});
