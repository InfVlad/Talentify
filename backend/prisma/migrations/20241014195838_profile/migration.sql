/*
  Warnings:

  - You are about to drop the column `address` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `studies` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile" DROP COLUMN "address",
DROP COLUMN "experience",
DROP COLUMN "studies";
