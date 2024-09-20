import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";

const DEFAULT_SELECT = {
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
};

export const getRestaurantsRouter = createTRPCRouter({
  getRestaurants: baseProcedure
    .input(
      z.object({
        category: z.string().optional(),
        keywords: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const { category, keywords } = input;
      const restaurants = await prisma.restaurant.findMany({
        select: DEFAULT_SELECT,
        where: {
          ...(category ? { category_name: category } : {}),
          ...(keywords
            ? { name: { contains: keywords, mode: "insensitive" } }
            : {}),
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
