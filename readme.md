## Just The Beginning

- First off, we are just getting started here, this is very premature.
- This utilizes Less CSS and Gulp to compile the CSS and JavaScript/jQuery
- It's also using NPM and Node.js so you will need to have Node installed in order to run Gulp and  automatic compiling.

## Getting Started
- in your CLI of choice (Terminal, iTerm, etc) run `npm install` from the root directory of this project (it has to be on the same level as the package.json file
- when that finishes, run `gulp`
- thats it! (so far)

## The Rundown (Overview)

Your Less files will automatically compile into a main.css file within a styles folder (gulp does all of this) and you are up and running.
This is build for fully responsive site(s)
It offer 2 options: desktop first and mobile first responsive styling which is handled in /less/main.less by importing the different Less files.
We are using Meyers CSS Reset 2.0 to remove all browser default styles. [Link](http://meyerweb.com/eric/tools/css/reset/ )

## Coming Soon
Well.. a lot.

- It will eventually be set up so that Gulp will watch and compile all .js files.
- Hopefully, we can build this in a way that it can easily be dropped into most, if not any, project and start up seemlessly.

## License

[MIT License](http://opensource.org/licenses/MIT)