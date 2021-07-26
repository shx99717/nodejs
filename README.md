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


#### understanding of devDependencies
`dependencies` are required to run, `devDependencies` only to develop, e.g.: `unit tests`, `CoffeeScript to JavaScript transpilation`, `minification`, ...

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



## Frequently used commands
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
```


We do not ship the folder `node_modules` with the project, after checkout from the repo, type 
```javascript
// Install all dependencies according to the package.json definition just like the pom.xml for maven
npm install
```





### Core modules shipped with NodeJS
* https://nodejs.org/api/
