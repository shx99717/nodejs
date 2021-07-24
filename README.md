# Hello NodeJS
- https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=7s

# Notes

## NPM - Node Package Manager (packed with NodeJS)
* Install 3rd party packages(frameworks, libraries, tools, etc)
* Packages get stored in the `node_module` folder
* All dependencies are listed in a `package.json` file
* NPM scripts can be created to run certain tasks such as run a server etc
* Search 3rd party libraries from https://www.npmjs.com/

```javascript
// Generates a package.json file
npm init

// Installs a package locally
npm install express

// Installs a package globally
npm install -g nodemon

// Installs a dev dependency
npm install --save-dev nodemon

// Get NodeJS version
node --version

// Get NPM version
npm --version
```


We do not ship the folder `node_modules` with the project, after checkout from the repo, type 
```javascript
// Install all dependencies according to the package.json definition just like the pom.xml for maven
npm install
```


### Core modules shipped with NodeJS
* https://nodejs.org/api/
