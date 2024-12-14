-- AlterTable
ALTER TABLE `Book` ADD COLUMN `flag` BOOLEAN NULL;

-- CreateTable
CREATE TABLE `Comment` (
    `comment_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `book_id` VARCHAR(191) NOT NULL,
    `comments` VARCHAR(191) NULL,

    PRIMARY KEY (`comment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
