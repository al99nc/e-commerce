/*
  Warnings:

  - The primary key for the `social_profiles` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "provider" AS ENUM ('GOOGLE', 'FACEBOOK', 'TWITTER', 'EMAIL');

-- CreateEnum
CREATE TYPE "hash_method" AS ENUM ('md5', 'sha1', 'sha265');

-- AlterTable
ALTER TABLE "social_profiles" DROP CONSTRAINT "social_profiles_pkey",
ADD CONSTRAINT "social_profiles_pkey" PRIMARY KEY ("user_id", "platform");

-- CreateTable
CREATE TABLE "credentials" (
    "provider_id" "provider" NOT NULL,
    "provider_key" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "hasher" "hash_method" NOT NULL,
    "password_hash" TEXT NOT NULL,
    "password_salt" TEXT NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "cart_items" (
    "cart_id" UUID NOT NULL,
    "product_id" UUID NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("cart_id","product_id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_lines" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "product_id" UUID NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "order_lines_pkey" PRIMARY KEY ("id","order_id")
);

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lines" ADD CONSTRAINT "order_lines_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_lines" ADD CONSTRAINT "order_lines_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
