# Project 12 - SportSee

This repo contains all the source code to install and launch the frontend part of the app SportSee (a sports analytics dashboard).
To install and launch the backend, see : https://github.com/a-c-morel/P12-front-end-dashboard

## 1. Installing and launching the frontend app

### 1.1 Prerequisites

NodeJS (version 16.16.0)
npm
If you are working with several versions of NodeJS, I recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### 1.2 Installing the frontend

Fork this repo (https://docs.github.com/en/get-started/quickstart/fork-a-repo ), then clone it (https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

When these steps are done, open your terminal on VSCode.

Change your directory to the name of the cloned folder.

For example, if folder name is "my-new-app"

`cd my-new-app`

You can now run `npm install`

It should create a package-lock.json and a node_modules files inside your directory.

### 1.3 Launching the frontend

Make sure the previous steps are successful.

Then, if not already done, install and launch the backend API on port 3000. (to install and launch the backend, see : https://github.com/a-c-morel/P12-front-end-dashboard)

Wait to see the message "Magic happens on port 3000" in the backend directory terminal.

On the frontend directory, then run the command `npm start`. Just wait a few seconds and it will ask you if you want to run it on another port (port 3000 is the default port but the backend needs it to run).

Press `y` : it should run the app on port 3001.

## 2. Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 2.1 Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### 2.2 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
