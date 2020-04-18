# ts-frontend-boilerplate
Just a simple boilerplate modern web app

<p>
  React Boilerplate for web application uses <a href="https://www.typescriptlang.org/">Typescript</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/redux">Redux</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="https://eslint.org/">Eslint</a>, <a href="https://developers.google.com/web/progressive-web-apps">PWAs</a>, <a href="http://webpack.github.io/docs/">Webpack</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a> for rapid application development (HMR).
</p>

<br>

<div align="center" style="margin-bottom: 20px">
  <a href="https://facebook.github.io/react/"><img src="./internals/img/react-padded-90.png" /></a>
  <a href="https://webpack.github.io/"><img src="./internals/img/webpack-padded-90.png" /></a>
  <a href="http://redux.js.org/"><img src="./internals/img/redux-padded-90.png" /></a>
  <a href="https://github.com/ReactTraining/react-router"><img src="./internals/img/react-router-padded-90.png" /></a>
  <a href="https://eslint.org/"><img src="./internals/img/eslint-padded-90.png" /></a>
  <a href="https://www.typescriptlang.org/"><img src="./internals/img/ts-padded.png" width="90" /></a>
  <a href="https://developers.google.com/web/progressive-web-apps"><img src="./internals/img/pwa-padded.png" width="90" /></a>
  <a href="https://jestjs.io"><img src="./internals/img/jest-padded.png" width="90" /></a>
</div>

<p>This framework has support for building applications with electron, it's very simple and powerful for building a web or desktop application</p>

<h1>Installation</h1>
<h2>Clone the repository</h2>

```bash
$ git clone https://github.com/bonkzero404/ts-frontend-boilerplate.git
$ cd ts-frontend-boilerplate
```

<h2>Install Dependencies</h2>

```bash
## Using yarn
$ yarn

## Using npm
$ npm install
```
<h1>Running the Browser Examples with Development Mode</h1>

```bash
$ yarn watch
```
<p>Now you can browse to <a href="http://localhost:11211/">http://localhost:11211/</a></p>

![Screenshot](internals/mock/1.png)
If you want to play counter
![Screenshot](internals/mock/2.png)

<h2>Unit Test</h2>
<p>Component Test defined & Snapshoot components</p>

```bash
$ yarn test
```

<h1>Running With Electron for Development Mode</h1>
<h2>Set Environment Variable</h2>
<p>open the .env file and change the <strong>ELECTRON</strong> variable to true</p>

```bash
## Require for configure build webpack
SOURCE_DEV = src
PUBLIC_DEV = public
BUILD_DEST = dist

## Require for configure webpack copy ignore in assets
ASSETS_COPY_IGNORE = ""

## Dev server configure
DEV_HOST = http://localhost
DEV_PORT = 11211

## Sites configure
TITLE = "Typescript React Framework"

## Add exposed global var in here
ELECTRON = true ## <-- Change this if you want to use electron

```

<h2>Running Example Electron App</h2>

```bash
## first
$ yarn watch
## or 
$ npm run watch

## last
## then running the electron app with the following command:
$ yarn start:elc:dev
## or
$ npm run start:elc:dev
```

<h1>Build Script to Production and Running the Example App</h1>
<h2>Web App</h2>

```bash
## build the script
$ yarn build

## running for test production
$ yarn start:web:prod
```

Browse to <a href="http://localhost:5000">http://localhost:5000</a>


<h2>Electron App</h2>

```bash
## build the script
$ yarn build

## running for test production
$ yarn start:elc:prod
```

