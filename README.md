# NodeJS Tutorial
- https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=7s

# Notes

## NPM - Node Package Manager (packed with NodeJS)
* Install 3rd party packages(frameworks, libraries, tools, etc)
* Packages get stored in the `node_module` folder
* All dependencies are listed in a `package.json` file
* NPM scripts can be created to run certain tasks such as run a server etc
* Search 3rd party libraries from https://www.npmjs.com/

## Local packages and global packages
* `local packages` are installed in the directory where you run `npm install <package-name>`, and they are put in the `node_modules` folder under this directory
* `global packages` are all put in a single place in your system (exactly where depends on your setup), regardless of where you run `npm install -g <package-name>`, In your code you can only require local packages `require('package-name')`

### More on `local packages`
In general, **all packages should be installed locally**.

This makes sure you can have dozens of applications in your computer, all running a different version of each package if needed.

Updating a global package would make all your projects use the new release, and as you can imagine this might cause nightmares in terms of maintenance, as some packages might break compatibility with further dependencies, and so on.

All projects have their own local version of a package, even if this might appear like a waste of resources, it's minimal compared to the possible negative consequences.


### More on `global packages`
A package **should be installed globally** when it provides an executable command that you run from the shell (CLI), and it's reused across projects.

You can also install executable commands locally and run them using npx, but some packages are just better installed globally.

Great examples of popular global packages which you might know are
* npm
* create-react-app
* vue-cli
* grunt-cli
* mocha
* react-native-cli
* gatsby-cli
* forever
* nodemon

## dependencies and devDependencies
#### understanding of dependencies
> Some good examples of dependencies which would be required at runtime include `React`, `Redux`, `Express`, and `Axios` etc...

When you install an npm package using `npm install <package-name>`, you are installing it as a dependency.
The package is automatically listed in the `package.json file`, under the dependencies


#### understanding of devDependencies
`dependencies` are required to run, `devDependencies` only to develop, e.g.: `unit tests`, `CoffeeScript to JavaScript transpilation`, `minification`, ...
> Some good examples of when to install devDependencies would be `Nodemon`, `Babel`, `ESLint`, and testing frameworks like `Chai`, `Mocha`, `Enzyme`, etc...

> Development dependencies are intended as development-only packages, that are unneeded in production. For example testing packages, webpack or Babel.

If you are going to develop a package, you download it (e.g. via git clone), go to its root which contains package.json, and run:
```javascript
npm install
```
Since you have the actual source, it is clear that you want to develop it, so by default, both `dependencies` (since you must, of course, run to develop) and `devDependency` dependencies are also installed.

If however, you are only an end user who just wants to install a package to use it, you will do from any directory:
```javascript
npm install "$package"
```
In that case, you normally don't want the development dependencies, so you just get what is needed to use the package: `dependencies`.

If you really want to install it as development packages in that case, you can set the `--save-dev` configuration option to `true`, possibly from the command line as:
```javascript
npm install "$package" --save-dev
```
The option is false by default

```javascript
// View all packages installed globally on the system
npm list -g --depth 0
```



## Frequently used commands - NPM
```javascript
// Generates a package.json file
npm init

// Installs a package locally (will automatically manage dependencies section of package.json)
// same as npm install express --save-prod (by default)
// --save-prod = -P
npm install express

// Installs a dev dependency (will automatically manage devDependencies section of package.json)
// --save-dev = -D
npm install --save-dev nodemon

// Installs a package globally
npm install -g nodemon

// Get NodeJS version
node --version

// Get NPM version
npm --version

// NPM package runner
// npx is a tool for running npm packages that
// live inside of a local node_modules folder or
// are not installed globally
// Need to install serve package first
npx serve
// You can run code that sits in a GitHub gist, for example:
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
// This will work as package cowsay exists on NPM as well
npx cowsay JavaScript FTW!
```


We do not ship the folder `node_modules` with the project, after checkout from the repo, type 
```javascript
// Install all dependencies according to the package.json definition just like the pom.xml for maven
// A.k.a installing packages from both dependencies and devDependencies
npm install

// To tell npm install packages only from dependenceis (not include devDependencies)
npm install --production

```

## Frequently used commands - YARN
```javascript
// Install yarn
npm install --global yarn

// Get yarn version
yarn --version


// npm install
yarn install

// npm install [package]
yarn add [package]

// npm install [package] --save-dev
yarn add [package] --dev
yarn add -D [package]

// npm install [package] --global
yarn global add [package]

// npm update --global
yarn global upgrade

// npm rebuild
yarn add --force

// npm uninstall [package]
yarn remove [package]

// npm cache clean
yarn cache clean [package]

// rm -fr node_modules && npm install
yarn upgrade

// npm run [start|build|lint|format|test|..]
// Run script [start|build|lint|format|test|..]
// Run start script
yarn run start
```





### Core modules shipped with NodeJS
* https://nodejs.org/api/
