/*
  Warnings:

  - You are about to drop the column `created` on the `carts` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'ORDERED', 'ABANDONNED');

-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_created_fkey";

-- AlterTable
ALTER TABLE "carts" DROP COLUMN "created",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
