# Book Search Engine

Google Books API search engine built with a RESTful API refactored in this project into a GraphQL API built with Apollo Server.

## GitHub URL

https://github.com/ktrnthsnr/Book-Search-Engine

## Heroku deployed website


## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Testing](#testing)
* [Contribution](#contribution)
* [React](#react)

## Description

This project is focused on full-stack web development using MERN stack tools, languages, and npm libraries, with emphasis on GraphQL, a query language for APIs and runtime for completing queries, and the Apollo client and npm packages which will integrate GraphQL into the Express.js server.

* QueryQL application brief intro 
    * The search engine contains these models:

    * The development server will use Mongoose for all its MongoDB data handling, which run through the server/config/connection.js, and is exported through mongoose.connection.
    * The connection is imported by the server/server.js.    
    * Seeder dummy data can be generated via the server/seeders/seeds.js file by the Faker.js library.
    * To access the GraphQL API, schemas were created. Located under server/schemas, this location contains the type definitions (queries) and resolvers (response) which the QueryQl API accesses to perform the CRUD (create, read, update, delete) operations.
    * The Apollo server is connected to the Express.js server, as defined in the server/server.js.
    * QueryQL queries can be run in the QueryQL Playground. See the `Usage` section below for more info on starting the nodemon server, quering the db, and viewing the results in the localhost.


## Technology

Node.js, JavaScript, ES6, npm MongoDB, Mongoose, Express.js, React.js, GraphQL, GraphQL Playground, Apollo Server, Apollo-Client, graphql-tag, apollo-server-express, apollo-boost, React Router, react-router-dom, apollo/react-hooks, if-env, concurrently, jsonwebtoken, jwt-decode, faker, nodemon, bcrypt, moment

## Installations for this MERN application

- Prereq: install VSCode, Node.js, and MongoDB

- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
    - $ `npm i`

- Otherwise, for custom individual component installations, start by initializing npm and creating a new package.json
    - $ `npm init --y` or $ `npm install`
    - Create a .gitignore file in the root and add `node_modules` to this file
    - If you need to re-add any of the dependencies, run $ `npm install`

- Npm packages installed:

- Apollo Server library
    - $ `npm i apollo-server-express`

- mongoose
- graphql-tag 

- Apollo-Client 
- apollo-server-express 
- apollo-boost 
- React Router 
- react-router-dom 
- apollo/react-hooks 
- if-env 
- concurrently 
- jsonwebtoken 
- jwt-decode 
- faker 
- nodemon
- brcrypt
- moment


## Usage

### Website
- The website for this website has been deployed to GitHub.
	![insert](./insert.jpg "insert")

### Local install and usage
- To view the site locally, first install the npm packages
- $ `npm i`
- Then seed the data
- $ `npm run seed`
- Start the MongoDB
- $ `mongod`
- To test the Apollo server connecting to the Express.js, (to test the schemas and server.js), run the following 
- $ `cd server`
- $ `npm run watch`
- This allows for file changes without having to restart the server. The config is setup in the package.json to run nsodeman, "watch": "nodemon".
- Use GraphQL Playground locally at `http://localhost:3001/graphql`
- Sample queries can be copied from the GraphqlPlayground-queries.md. 

- To start the application on localhost port 3001, run in the bash terminal
- $ `npm start`



## Testing




## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr


## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
