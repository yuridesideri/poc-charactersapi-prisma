/*
  Warnings:

  - You are about to drop the `characters` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "WorldName" AS ENUM ('Azeroth', 'Narnia', 'Pandaria');

-- DropTable
DROP TABLE "characters";

-- CreateTable
CREATE TABLE "Characters" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "race" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "age" BIGINT NOT NULL,
    "height" BIGINT NOT NULL,
    "u_obj" VARCHAR(255) NOT NULL,
    "sex" VARCHAR(255) NOT NULL,
    "image" TEXT,
    "guild" INTEGER,
    "world_born" INTEGER NOT NULL,

    CONSTRAINT "characters_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guilds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "leaderId" INTEGER NOT NULL,
    "members[]" INTEGER NOT NULL,
    "image" TEXT,

    CONSTRAINT "guilds_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Worlds" (
    "id" SERIAL NOT NULL,
    "name" "WorldName" NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "worlds_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Characters_u_obj_key" ON "Characters"("u_obj");

-- CreateIndex
CREATE UNIQUE INDEX "Characters_image_key" ON "Characters"("image");

-- CreateIndex
CREATE UNIQUE INDEX "Characters_guild_key" ON "Characters"("guild");

-- CreateIndex
CREATE UNIQUE INDEX "Characters_world_born_key" ON "Characters"("world_born");

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_name_key" ON "Guilds"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_description_key" ON "Guilds"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_leaderId_key" ON "Guilds"("leaderId");

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_members[]_key" ON "Guilds"("members[]");

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_image_key" ON "Guilds"("image");

-- CreateIndex
CREATE UNIQUE INDEX "Worlds_name_key" ON "Worlds"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Worlds_description_key" ON "Worlds"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Worlds_image_key" ON "Worlds"("image");

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "characters_fk0" FOREIGN KEY ("guild") REFERENCES "Guilds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Characters" ADD CONSTRAINT "characters_fk1" FOREIGN KEY ("world_born") REFERENCES "Worlds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Guilds" ADD CONSTRAINT "guilds_fk0" FOREIGN KEY ("leaderId") REFERENCES "Characters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Guilds" ADD CONSTRAINT "guilds_fk1" FOREIGN KEY ("members[]") REFERENCES "Characters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
