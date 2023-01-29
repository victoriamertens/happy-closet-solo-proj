# Happy Closet

This version uses React, Redux, Express, AWS' software developer kit, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

readme-media/Demo - long screenshare.mov

## Duration:

3 Week Solo Project

# Table of Contents

1. [Elevator Pitch](#elevator-pitch)
2. [Project Description](#project-description)
3. [Project Challenges: Amazon Web Services](#project-challenges)
4. [Future Project Goals](#future-project-goals)
5. [How to Run the Project](#how-to-run-the-project)

## Elevator Pitch

We have all been in this scenario. You wake up, open your closet doors, and immediately you are faced with an unpleasant emotion. Maybe you are running late and don’t have time to pick a nice outfit, maybe your closet is disorganized, or maybe you simply don’t know what to wear. Insert Happy Closet. Happy Closet acts as a virtual copy of your closet, allowing users to put together outfits based on the items in your closet. The application saves these outfits in a log to help users get ready in the morning.

## Project Description

From a software perspective, Happy Closet allows the user to do four major things:

#### 1. Register as a unique user.

The application uses Passport, an authentication middleware for Node.js, and BcryptJS to generate hash passwords, in order to create a user and keep their information secure.

#### 2. Create a clothing 'item' in the user's closet database.

An 'item' is a list of data that represents an article of clothing. The data includes a name, cost, color, brand, and category, along with a photograph of the item. The photo is uploaded to Amazon's Simple Storage Service (S3), where the image is stored in the cloud and accessible via a specific url. For more information on the process, visit [Amazon Web Services Website](https://aws.amazon.com/s3/).

#### 3. Create an 'outfit' in the user's outfit log.

An 'outfit' is a combination of items the user selects in the app. The user selects the items they wore, and adds data on their initial reaction rating to the outfit, and a comment about their thoughts on the outfit.

#### 4. View both the user's items and past outfits.

The user can view past outftis on the 'outfits', where they have the ability to filter the outfits based on what reaction rating they gave to each outfit. The user can also view the items in their 'closet' in the same way.

## Project Challenges

The biggest challenge I faced with this project was using Amazon's Simple Storage Service (S3) for image upload. One of my goals for this project was to stretch and challenge myself. S3 provided a great opportunity to challenge myself while also learning more about web operations. I cannot understate how much I learned from this challenge. Conceptually, it stretched my understanding of cloud-based storage, application security, local memory, and writing code for multiple environments with deployment, all of which has deepened how I think and talk about software development. Additionally, it taught me how to navigate lengthy and complex documentation. While it gave me a large headache at times, I developed an organized way to approach documentation to more efficiently find the answers I am looking for.

## Future Project Goals

Next steps for the project is implementing a statistics page where the user can have helpful data about the amount of times they have worn an item of clothing, the cost per wear of that item, and what items are worn the most and least. This feature was the reason I embarked on this project. I think clothes are a great tool for self expression, but closets can be very difficult to manage. I wanted an application that gave me data on my personal closet, so that I could keep it more organized and have a better sense of what clothes I actually wear and why.

## How to Run the Project

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

#### Create database and table

Create a new database called `happy_closet` and copy and paste the information in the database.sql file into PostgreSQL.

If you would like to name your database something else, you will need to change `happy_closet` to the name of your new database name in `server/modules/pool.js`.

#### Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`
