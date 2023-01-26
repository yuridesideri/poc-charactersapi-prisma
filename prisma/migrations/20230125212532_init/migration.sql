-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "race" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "age" BIGINT NOT NULL,
    "height" BIGINT NOT NULL,
    "u_obj" VARCHAR(255) NOT NULL,
    "sex" VARCHAR(255) NOT NULL,
    "image" TEXT,

    CONSTRAINT "characters_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "characters_u_obj_key" ON "characters"("u_obj");
