
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80)
);

CREATE TABLE "items" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (1000) NOT NULL,
    "color" VARCHAR (50),
    "cost" INT, 
    "brand" VARCHAR(80),
    "category_name" VARCHAR (50), 
    "image_url" VARCHAR (80) 
);


CREATE TABLE "outfits" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "users"
    "favorite" BOOLEAN DEFAULT "false"
);


CREATE TABLE "items_outfits" (
    "id" SERIAL PRIMARY KEY,
    "item_id" INT REFERENCES "items",
    "outfit_id" INT REFERENCES "outfits"
);

CREATE TABLE "wear_log" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "users",
    "outfit_id" INT REFERENCES "outfits", 
    "comment" VARCHAR (100), 
    "reaction" INT
);

--STRETCH GOAL 
--CREATE TABLE "categories"
--"id" SERIAL PRIMARY KEY,
--"category_name" VARCHAR (50), 
--"user_id" INT REFERENCES "users"


--DUMMY DATA TO ENTER : 

INSERT INTO ""
('')
VALUES 
('',)