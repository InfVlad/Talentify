/*
  Warnings:

  - You are about to drop the column `applicants` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `offers` table. All the data in the column will be lost.
  - You are about to drop the `application` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `offers` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `offers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `address` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OfferStatus" AS ENUM ('OPEN', 'CLOSED');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('APPLIED', 'REVIEWED', 'INTERVIEW', 'OFFER', 'REJECTED');

-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_offerId_fkey";

-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_userId_fkey";

-- AlterTable
ALTER TABLE "company" ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "offers" DROP COLUMN "applicants",
DROP COLUMN "owner",
ADD COLUMN     "ownerId" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OfferStatus" NOT NULL,
ALTER COLUMN "creation_date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "address" TEXT NOT NULL;

-- DropTable
DROP TABLE "application";

-- DropEnum
DROP TYPE "Formation";

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "company_name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studies" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "institution_name" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "graduation_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "studies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "offerId" INTEGER NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorites" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "offerId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_name_key" ON "company"("name");

-- AddForeignKey
ALTER TABLE "offers" ADD CONSTRAINT "offers_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience" ADD CONSTRAINT "experience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studies" ADD CONSTRAINT "studies_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_offerId_fkey" FOREIGN KEY ("offerId") REFERENCES "offers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
