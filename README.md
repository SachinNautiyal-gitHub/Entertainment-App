﻿
# Entertainment-APP

The entertainment app is an OTT (Over-the-Top) platform built using React and Context API for the frontend, while the server-side utilizes Node.js, Express, and MongoDB for managing collections. The app allows users to access a wide range of movies and TV shows for streaming. Key features include the ability for users to bookmark their favorite movies, ensuring easy access to preferred content.

To enhance security, JSON Web Token (JWT) implementation is employed to secure routes and ensure that user data remains protected. This mechanism helps in authenticating and authorizing users' access to various functionalities within the app.

Overall, the entertainment app provides a seamless and secure platform for users to enjoy their favorite movies and TV shows.



## Application Folder Structure

1. [/backend/middleware] ->  This folder contain one fetchUser.js file , which is work as middleware to authenticate a user and secure all routes.

2. [/backend/models] ->  This folder contains three files - BookMark.js, Movies.js and User.js , which define the Schema of the bookmark, movies and users in the database.

3. [/backend/routes] -> Contain two files- auth.js and data.js , In the auth.js the authentication endpoints is implemented and in the data.js file all the required endpoints to fetch data , add -delete bookmarks , fetch bookmarkdata is implemented.

4. [/backend/data.js] -> The data which I am using for movie database.

5. [/backend/DB.js] -> In this file the DB connection is implemented.

6. [/backend/index.js] -> Entry point, In this file the server is implemented.

7. [/frontend/src/components] -> All the components is inside this folder.

8. [frontend/src/pages] -> All the pages is inside this folder.

9. [frontend/src/App.js] -> Main app file 

10. [frontend/src/Context.js] -> Context js for managing states of the application and fetching data inside this file.

11. [frontend/src/index.js] -> Main index file 



| -> backend
|     |
|     | -> middleware
|     |         | -> fetchUser.js
|     |         
|     | -> models
|     |         | ->  BookMark.js
|     |         | ->  Movies.js
|     |         | ->  User.js
|     | -> routes
|     |         | ->  auth.js
|     |         | ->  data.js
|     |
|     | -> data.js
|     | -> DB.js
|     | -> index.js
|     |
|     
|
| -> frontend
|         | -> public
|         |      
|         | -> src
|         |      |-> components
|         |      |          |-> Styles
|         |      |          |-> BookMark.jsx
|         |      |          |-> Footer.jsx
|         |      |          |-> HomeComponent.jsx
|         |      |          |-> Movies.jsx
|         |      |          |-> Navbar.jsx
|         |      |          |-> Search.jsx
|         |      |          |-> SearchResult.jsx
|         |      |          |-> Trending.jsx
|         |      |          |-> TVshows.jsx
|         |      |
|         |      |
|         |      | -> pages 
|         |      |       |-> Styles
|         |      |       |-> Home.jsx
|         |      |       |-> Login.jsx
|         |      |       |-> SignUp.jsx
|         |      |       
|         |      | -> App.css
|         |      | -> App.js
|         |      | -> Context.js
|         |      | -> index.css
|         |      | -> index.js
|         |      | -> reportWebVitals.js
|         |      | 
|         |      
|         |      
|         | -> README.md     
|         |      


## Installation 

You'll need to have **Node.js**  installed on your computer in order to begin working on the project. 
Once installed, Clone this repository to your **local** machine.

Firstly Open the terminal, go to the backend folder by using **cd backend** command, after that install required dependencies by using 
**npm install** command.
After that just type command  **node index.js** to start the server.

Once the server is started ,open new terminal and go to the frontend directory by using **cd frontend** command.
Install the required dependencies by using **npm install** command.
Start the server by using **npm start**.


## Deployment

See live site :  https://entertainment-app-1mv4.onrender.com/
