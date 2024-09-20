/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `featured` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `restaurants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[restaurant_id]` on the table `featured` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurant_id` to the `featured` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurant_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_favorite` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "featured" DROP CONSTRAINT "featured_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_restaurantId_fkey";

-- DropIndex
DROP INDEX "featured_restaurantId_key";

-- AlterTable
ALTER TABLE "featured" DROP COLUMN "restaurantId",
ADD COLUMN     "restaurant_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "restaurantId",
ADD COLUMN     "restaurant_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "restaurants" DROP COLUMN "isFavorite",
ADD COLUMN     "is_favorite" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "featured_restaurant_id_key" ON "featured"("restaurant_id");

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "featured" ADD CONSTRAINT "featured_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
