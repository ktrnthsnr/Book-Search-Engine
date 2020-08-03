﻿# Book Search Engine

Google Books API search engine built with a RESTful API refactored in this project into a GraphQL API built with Apollo Server.

## GitHub URL

https://github.com/ktrnthsnr/Book-Search-Engine

## Heroku deployed website

Before refactor as REST API
    https://ktrnthsnr-book-search-restapi.herokuapp.com/ 
    
After refactor as GraphQL API 
    https://ktrnthsnr-book-search-graphqlapi.herokuapp.com/ 

## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Testing](#testing)
* [Contribution](#contribution)
* [React](#react)

## Description

The task for this repo will be to refactor the code from one set of libraries to a different set.

- Original: The original application was built using the MERN stack, with a RESTful API, with a React front-end and MongoDB, Node.js/Express.js server and API.

- New: The refactored application will use GraphQL API built with Apollo Server.

This project is focused on full-stack web development using MERN stack tools, languages, and npm libraries, with emphasis on GraphQL, a query language for APIs and runtime for completing queries, and the Apollo client and npm packages which will integrate GraphQL into the Express.js server.

## Technology

Node.js, JavaScript, ES6, npm MongoDB, Mongoose, Express.js, React.js, GraphQL, GraphQL Playground, Apollo Server, Apollo-Client, graphql-tag, apollo-server-express, apollo-boost, React Router, react-router-dom, apollo/react-hooks, if-env, concurrently, jsonwebtoken, jwt-decode, faker, nodemon, bcrypt, moment

## Installations for this MERN application

- Prereq: install to your desktop VSCode, Node.js, and MongoDB
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
    - Server 
    - $ `cd server`
    - $ `npm i`
     - Client
    - $ `cd client`
    - $ `npm i`

- Otherwise, for custom individual component installations, install the npm packages per each server and client:

### Server-side installations
- original `server` dependencies before refactor to QueryQL and Apollo server
        ```
        "dependencies": {
            "bcrypt": "^4.0.1",
            "express": "^4.17.1",
            "faker": "^4.1.0",
            "jsonwebtoken": "^8.5.1",
            "moment": "^2.24.0", 
            "mongoose": "^5.9.9"
        },
        "devDependencies": {
            "nodemon": "^2.0.3"
        ```

- Npm packages installed under the /server folder:
    - Under the /server folder, create a .gitignore file in the root and add `node_modules` to this file
    - Install these npm packages
    - $ `cd server`
    - brcrypt `npm install bcrypt`
    - express.js `npm i express`
    - faker `npm i faker`
    - jsonwebtoken  `npm install jsonwebtoken`
    - moment `npm install moment`
    - mongoose `npm install mongoose`
- Npm packages installed for the /server refactor include:
    - Apollo Server library $ `npm i apollo-server-express`
    - For user authentication, to be able to encode a JSON object into a tokenized string, install JSON Web Token (JWT) package $ `npm install jsonwebtoken`

### Client-side installations
- original `client` dependencies before refactor to QueryQL and Apollo server
    ```
    "dependencies": {
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.3.2",
        "@testing-library/user-event": "^7.1.2",
        "bootstrap": "^4.4.1",
        "jwt-decode": "^2.2.0",
        "react": "^16.13.1",
        "react-bootstrap": "^1.0.1",
        "react-dom": "^16.13.1",
        "react-router-dom": "^5.1.2",
        "react-scripts": "3.4.1"
        }
    ```
- Npm packages installed under the /client folder:
     - Under the /client folder, create a .gitignore file in the root and add `node_modules` to this file
     - Create the React App tool if cloned the repo, by running in the bash terminal
        - $ `cd client`
        - $ `npx create-react-app .` 
        - (New installs without repo cloning, run $ `npx create-react-app client`)
    - Install these these npm packages as well
    - jest-dom `npm install @testing-library/react @testing-library/jest-dom --save-dev`
    - bootstrap `npm i bootstrap`
    - popper  `npm i popper.js`
    - jQuery `npm i jquery`
    - jwt-decode `npm i jwt-decode`
    - react-bootstrap `npm i react-bootstrap`
    - react-dom `npm i react-dom`
    - react-router-dom `npm i react-router-dom`
    - react-scripts `npm i react-scripts`

- 
- Other npm installations:
        - graphql-tag 
        - Apollo-Client 
        - apollo-boost
        - React Router
        - react-router-dom 
        - apollo/react-hooks 
        - if-env `npm i if-env`
        - concurrently `concurrently`
        - nodemon `npm i nodemon`


## Usage


### Website
- The website has been deployed to Heroku before and after the refactor exercise, before and after utilizing GraphQL\Apollo.

    - Heroku before refactor
        
    - Heroku after the refactor
	

- Development server can be reached through 
    - $ `cd client`
    - $ `npm start`
- The browser will open to your localhost `http://localhost:3001`
- Here is a search sample from the dev server, 
	![Book Search Engine](./searchSample.jpg "Book Search Engine")


### Local install, seed and usage 

#### Server-side
- To view the site locally on the development server, first install the npm packages
    - $ `npm i` or `npm install`
- Then seed the data
    - $ `npm run seed`
- Start the MongoDB
    - $ `mongod`
- To test the Apollo server sider connections to the Express.js, (to test the schemas and server.js), run the following 
    - $ `cd server`
    - $ `npm run watch`
- This allows for queries and any file changes without having to restart the server. The config is setup in the package.json to run nsodeman, "watch": "nodemon".
- Use GraphQL Playground locally at `http://localhost:3001/graphql`
- Sample queries can be copied to GraphQL Playground from the ./GraphqlPlayground-queries.md. <in work>

- If npm run watch requires additional npm packages, the server side dependencies as listed under /server/package.json. See installations for more info.


#### Client-side
- Clone the repo to your local drive, install the npm packages to the /server folder first, then these to the /client folder
    - $ `cd client`
    - $ `npm i` or `npm install`
- Then start up the app. The React app client starts up by running from the client directory
    - $ `cd client`
    - $ `npm start`
- The default browser will open the development server to your localhost, at `http://localhost:3000/`

- If npm start requires additional npm packages, the client side dependencies are located at /client/package.json. See installations for more info.


## Testing

See Usage > server-side.

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
