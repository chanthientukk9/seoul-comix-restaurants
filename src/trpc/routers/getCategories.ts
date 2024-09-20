import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";

export const getCategoriesRouter = createTRPCRouter({
  getCategories: baseProcedure.query(async () => {
    const categories = await prisma.storeCategory.findMany({
      select: {
        name: true,
        description: true,
      },
    });

    return {
      categories,
    };
  }),
});
