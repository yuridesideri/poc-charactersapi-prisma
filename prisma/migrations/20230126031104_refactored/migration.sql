/*
  Warnings:

  - You are about to drop the column `guild` on the `Characters` table. All the data in the column will be lost.
  - You are about to drop the column `world_born` on the `Characters` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Guilds` table. All the data in the column will be lost.
  - You are about to drop the column `leaderId` on the `Guilds` table. All the data in the column will be lost.
  - You are about to drop the column `members[]` on the `Guilds` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[world_born_id]` on the table `Characters` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[guild_logo]` on the table `Guilds` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `world_born_id` to the `Characters` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Characters" DROP CONSTRAINT "characters_fk0";

-- DropForeignKey
ALTER TABLE "Characters" DROP CONSTRAINT "characters_fk1";

-- DropForeignKey
ALTER TABLE "Guilds" DROP CONSTRAINT "guilds_fk0";

-- DropForeignKey
ALTER TABLE "Guilds" DROP CONSTRAINT "guilds_fk1";

-- DropIndex
DROP INDEX "Characters_guild_key";

-- DropIndex
DROP INDEX "Characters_world_born_key";

-- DropIndex
DROP INDEX "Guilds_image_key";

-- DropIndex
DROP INDEX "Guilds_leaderId_key";

-- DropIndex
DROP INDEX "Guilds_members[]_key";

-- AlterTable
ALTER TABLE "Characters" DROP COLUMN "guild",
DROP COLUMN "world_born",
ADD COLUMN     "guild_id" INTEGER,
ADD COLUMN     "world_born_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Guilds" DROP COLUMN "image",
DROP COLUMN "leaderId",
DROP COLUMN "members[]",
ADD COLUMN     "guild_logo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Characters_world_born_id_key" ON "Characters"("world_born_id");

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_guild_logo_key" ON "Guilds"("guild_logo");

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guilds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "Characters_world_born_id_fkey" FOREIGN KEY ("world_born_id") REFERENCES "Worlds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
