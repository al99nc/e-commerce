-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'User', 'GUEST');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('EN', 'AR', 'FR');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3),
    "email_validated" TIMESTAMP(3),
    "phone_validated" TIMESTAMP(3),
    "bio" TEXT,
    "company" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
