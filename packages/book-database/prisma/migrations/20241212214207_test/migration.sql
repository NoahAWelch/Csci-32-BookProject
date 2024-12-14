/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `BookProperties` ADD COLUMN `comments` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Comment`;
