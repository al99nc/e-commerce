/*
  Warnings:

  - The values [fr] on the enum `Locale` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Locale_new" AS ENUM ('en', 'ar');
ALTER TABLE "User" ALTER COLUMN "locale" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "locale" TYPE "Locale_new" USING ("locale"::text::"Locale_new");
ALTER TYPE "Locale" RENAME TO "Locale_old";
ALTER TYPE "Locale_new" RENAME TO "Locale";
DROP TYPE "Locale_old";
ALTER TABLE "User" ALTER COLUMN "locale" SET DEFAULT 'en';
COMMIT;
