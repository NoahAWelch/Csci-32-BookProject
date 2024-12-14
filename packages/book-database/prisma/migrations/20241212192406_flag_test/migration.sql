/*
  Warnings:

  - You are about to drop the column `flag` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Author` ADD COLUMN `flag` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `flag`;
