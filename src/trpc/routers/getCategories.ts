import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/prisma/prisma";

export const getCategoriesRouter = createTRPCRouter({
  getCategories: baseProcedure
    .query(async () => {
      const categories = await prisma.storeCategory.findMany();

      return {
        categories,
      };
    }),
});
