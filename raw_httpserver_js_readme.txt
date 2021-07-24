In order to constantly automatically load the changed javascript in raw_httpserver.javascript
put 
"scripts": {
    "start": "node raw_httpserver.js",
    "dev": "nodemon raw_httpserver.js"
  },

into package.json
- [start script] Start the raw http server at begining
- [dev script] Constantly monitor the changes of the javascript and reload automatically

and in the console, type

npm run dev

to run the development mode