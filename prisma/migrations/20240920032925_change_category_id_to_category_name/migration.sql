/*
  Warnings:

  - You are about to drop the column `categoryId` on the `restaurants` table. All the data in the column will be lost.
  - Added the required column `category_name` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "restaurants" DROP CONSTRAINT "restaurants_categoryId_fkey";

-- AlterTable
ALTER TABLE "restaurants" DROP COLUMN "categoryId",
ADD COLUMN     "category_name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "store_categories"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
