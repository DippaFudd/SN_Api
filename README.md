## Social Network API
Welcome to the Social Network API! This project is designed to demonstrate the power and flexibility of building a NoSQL-based backend for a social networking platform.
## Description
This project is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, MongoDB for the database, and Mongoose as the ODM (Object Data Modeling) library. This API allows users to create, update, and delete users, thoughts, reactions, and friends. The data is stored in a MongoDB database, and the server handles routing and logic for CRUD operations.

## User Story
- **AS A** social media startup
- **I WANT** an API for my social network that uses a NoSQL database
- **SO THAT** my website can handle large amounts of unstructured data

## Acceptance Criteria
- **GIVEN** a social network API:
- **WHEN** I enter the command to invoke the application:
- **THEN** my server is started and the Mongoose models are synced to the MongoDB database.

- **WHEN** I open API GET routes in Insomnia for users and thoughts:
- **THEN** the data for each of these routes is displayed in a formatted JSON.
-**WHEN** I test API POST, PUT, and DELETE routes in Insomnia:
-**THEN** I am able to successfully create, update, and delete users and thoughts in my database.
- **WHEN** I test API POST and DELETE routes in Insomnia:
- **THEN** I am able to successfully create and delete reactions to thoughts and add and remove friends from a user’s friend list.

## Installation
- 1.Clone repo
- 2.Go to vs code
- 3.npm i
- 4.Connect Mongo database 
- 5.Set up .env with Mongo db string
- 6. npm start

## Usage
Testing the API
To test the API endpoints, you can use Insomnia or Postman to send HTTP requests to the server with GET , PUT , Post and DEL .
