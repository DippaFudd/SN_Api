Social Network API
## Description
This project is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, MongoDB for the database, and Mongoose as the ODM (Object Data Modeling) library. This API allows users to create, update, and delete users, thoughts, reactions, and friends. The data is stored in a MongoDB database, and the server handles routing and logic for CRUD operations.

## User Story
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
Given a social network API:

When I enter the command to invoke the application:

Then my server is started and the Mongoose models are synced to the MongoDB database.

When I open API GET routes in Insomnia for users and thoughts:

Then the data for each of these routes is displayed in a formatted JSON.

When I test API POST, PUT, and DELETE routes in Insomnia:

Then I am able to successfully create, update, and delete users and thoughts in my database.

When I test API POST and DELETE routes in Insomnia:

Then I am able to successfully create and delete reactions to thoughts and add and remove friends from a user’s friend list.

## Installation
Clone the repository:

bash
Copy code
git clone (Repo)
Navigate into the project directory:

bash
Copy code
cd (Repo)
Install the necessary dependencies:

bash
Copy code
npm install
Set up your environment variables:

Create a .env file in the root of the project.

Add your MongoDB URI in the .env file, like this:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/Sn_api
Start the server:

bash
Copy code
npm start
The server will now be running and listening on http://localhost:3001.

## Usage
Testing the API
To test the API endpoints, you can use Insomnia or Postman to send HTTP requests to the server.

GET All Users:

Endpoint: GET /api/users

Description: Fetches a list of all users in the database.

GET Single User by ID:

Endpoint: GET /api/users/:userId

Description: Fetches a single user by their _id and populates their thoughts and friend data.

POST Create a New User:

Endpoint: POST /api/users

Example Request Body:

json
Copy code
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
PUT Update a User by ID:

Endpoint: PUT /api/users/:userId

Example Request Body:

json
Copy code
{
  "username": "newUsername",
  "email": "newemail@example.com"
}
DELETE Remove a User by ID:

Endpoint: DELETE /api/users/:userId

POST Add a Friend to a User:

Endpoint: POST /api/users/:userId/friends/:friendId

DELETE Remove a Friend from a User's Friend List:

Endpoint: DELETE /api/users/:userId/friends/:friendId

GET All Thoughts:

Endpoint: GET /api/thoughts

Description: Fetches a list of all thoughts in the database.

GET Single Thought by ID:

Endpoint: GET /api/thoughts/:thoughtId

Description: Fetches a single thought by its _id.

POST Create a New Thought:

Endpoint: POST /api/thoughts

Example Request Body:

json
Copy code
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
PUT Update a Thought by ID:

Endpoint: PUT /api/thoughts/:thoughtId

DELETE Remove a Thought by ID:

Endpoint: DELETE /api/thoughts/:thoughtId

POST Create a Reaction for a Thought:

Endpoint: POST /api/thoughts/:thoughtId/reactions

Example Request Body:

json
Copy code
{
  "reactionBody": "This is a cool reaction",
  "username": "lernantino"
}
DELETE Remove a Reaction from a Thought:

Endpoint: DELETE /api/thoughts/:thoughtId/reactions/:reactionId

