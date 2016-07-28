References:
This app is built by referning the tutorial "http://joanmira.com/tutorial-build-a-weather-app-with-react/".
I have again specified the steps for a quick reference.

Step 1:
create a weatherApp folder

Step 2:
Create a repository in git.

Step 3:
"npm init"
specify all the details and git repo path.

Step 4:
specify below dependencies in package.json:-
 "dependencies": {
    "browserify": "^9.0.3", //Browserify lets us require('modules') in the browser by bundling up all our dependencies.
    "classnames": "^2.2.3",
    "gulp": "^3.8.11",
    "gulp-concat": "^2.5.2",
    "gulp-react": "^3.0.1",
    "gulp-sass": "^2.0.1",
    "gulp-server-livereload": "1.3.0",
    "gulp-util": "^3.0.4",
    "gulp-watch": "^4.2.4",
    "node-notifier": "^4.2.1", //This is will create alert messages which occured during bundle process
    "react": "^0.14.3",
    "react-dom": "^0.14.3",
    "reactify": "^1.1.0",  //This is used to convert JSX files to js files
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^2.4.0", //This is watch mode for browserify builds
    "whatwg-fetch": "^0.11.0"
  }
  
  Step 5:
  npm install bower
  
  Step 6:
  npm install weather-icons
  
  Step 7:
  create a package structure as below:
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /weatherApp
            bower.json
            package.json
            gulpfile.js
            index.html
            /bower_components
            /node_modules
            /sass
                main.scss
                /partials
                    base.scss
                    reset.scss
                /src
                    app.jsx
                    /utils
                     api.jsx

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
Note:
-----------------------------------------------------------------
    gulpfile.js: this is where we will define the tasks to be run, like compiling SASS and JSX, bundling the code, watching for changes, reloading the browser, etc
    index.html: a very minimal markup for our app
    main.scss: we will use it to set the order in which we want to load the SASS files
    base.scss: all our CSS styles
    reset.scss: basic resetting CSS rules
    app.jsx: the core of our app
    api.jsx: the module to contact the Weather API
    
    
    What is gulp: Its a task runner like grunt
-----------------------------------------------------------------


    Step 8:
    open gulpfile.js and add
    
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var gulp = require('gulp');
    var gutil = require('gulp-util');
    var source = require('vinyl-source-stream');
    var browserify = require('browserify');
    var watchify = require('watchify');
    var reactify = require('reactify');
    var notifier = require('node-notifier');
    var server = require('gulp-server-livereload');
    var concat = require('gulp-concat');
    var sass = require('gulp-sass');
    var watch = require('gulp-watch');
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    //TODO: node-notifier module functionality
    
    Step 9:
    Creating a bundle:
        required modules:
        watchify,browserify,reactify.
            /***
            watchify: 
                This is watch mode for browserify builds
            Browserify: 
                This lets us require('modules') in the browser by bundling up all our dependencies. It looks at a single JavaScript file (in this case app.jsx), and follows the require dependency tree, and bundles them into a new file.
            reactify: 
                ReactJS uses a special syntax called JSX, not the normal JS one. Usually, when you want to work with ReactJS JSX files, you need to transform them into normal JS files. So we are going to use 'reactify' to transform those JSX into JS files.
            **/
        
    What is the output of doing above bundle??
    --> we will create a Browserify bundler and add a transformer to transform JSX to Javascript and then bundle everything together into a file called main.js that will sit in the root.
    
    Step 10:
    
    Processing SASS files:
        Process the SASS files and put them all together into a style.css based on the order specified in the main.scss.
        
        
    Step 11:
    Include live reload server functionality
        This is to reload the browser automatically each time there is a change in our code 
    
    Step 12:
    Creating watch task for SASS files.
    
    Step 13:
    creating index.html file with below sections.
        a. A container DIV where we will attach the React component
        b. The font loaded from Adobe Edge Fonts
        c.The compiled CSS file
        d. The weather icons CSS file
        e. The compiled JS file
        
    Step 14:
    Creating a reset css
    
    
    Step 15:
    This is where our react concepts will come in to picture.
        open /src/app.jsx
        add required modules: react, react-dom, classnames
            /***
            react and react-dom:
                correspnds to react framework.
            
            classnames:
                3rd party module which is required to build class names that contain dynamic data.
                
            Api:
                this module is requiring the modules required to fetch the data from weather api.
                
            **/
        
    
    Step 16:
    Declaring variables
    
    Step 17:
    Define react component
    
    