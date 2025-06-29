/*
  Warnings:

  - Added the required column `created_at` to the `social_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform` to the `social_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform_user` to the `social_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "social_platform" AS ENUM ('FACEBOOK', 'GITHUP', 'INSTGRAM', 'TWITTER');

-- AlterTable
ALTER TABLE "social_profiles" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "platform" "social_platform" NOT NULL,
ADD COLUMN     "platform_user" TEXT NOT NULL;
