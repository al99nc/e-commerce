/*
  Warnings:

  - The values [User,GUEST] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN', 'CUSTOMER', 'STAFF');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
COMMIT;

-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,
    "created" TEXT NOT NULL,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_created_fkey" FOREIGN KEY ("created") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
