
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--Create database called: happy_closet

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR (80)
);

CREATE TABLE "items" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (1000) NOT NULL,
    "color" VARCHAR (50),
    "cost" INT, 
    "brand" VARCHAR(80),
    "category_name" VARCHAR (50), 
    "image_url" VARCHAR,
    "in_closet" BOOLEAN DEFAULT TRUE
);


CREATE TABLE "outfits" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "favorite" BOOLEAN DEFAULT false
);


CREATE TABLE "items_outfits" (
    "id" SERIAL PRIMARY KEY,
    "item_id" INT REFERENCES "items",
    "outfit_id" INT REFERENCES "outfits"
);

CREATE TABLE "wear_log" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
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
('',);


INSERT INTO "items"
("user_id","name", "color", "cost", "brand", "category_name", "image_url")
VALUES 
(1,'sky high buttons','light wash', 10, 'H&M', 'jeans', 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2F77%2Fda775a481abf7abf2b3b8c71120c21945daee74c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'),
(1,'ms. pleats','light wash', 10, 'WishList Jeans', 'jeans', 'https://cdn.laredoute.com/products/8/d/4/8d46f2f5cda6989c9fd9b750b679343b.jpg?imgopt=twic&twic=v1/resize=640'),
(1,'plain jane','medium wash', 14, 'Lucky', 'jeans', 'https://vader-prod.s3.amazonaws.com/1650514183-HIGH-RISE-WIDE-LEG-420.jpg'),
(1,'old faithful','light wash', 10, 'Cotton On', 'jeans', 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dwa23d7e3f/241200/241200-128-1.jpg?sw=640&sh=960&sm=fit'),
(1,'the cats meow','black', 30, 'artist', 'shirt', 'https://cdn.shopify.com/s/files/1/0503/0523/7143/products/rock-star-cat-band-t-shirt-super-kitty-cats-m-583038_600x.jpg?v=1650618675');