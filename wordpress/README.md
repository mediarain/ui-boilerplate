## UI Boilerplate theme for Wordpress

- This theme will run under Wordpress 4+ CMS and lamp enviroment.
- WP theme structure is based on [UI-Boilerplate](https://github.com/mediarain/ui-boilerplate) and [Underscores starter theme for wordpress](http://underscores.me/)
- This utilizes Less CSS and Gulp to compile the CSS and JavaScript/jQuery
- It's also using NPM and Node.js so you will need to have Node installed in order to run Gulp and take advantage of automatic compiling.

## Development Setup

- PHP, MySQL and a webserver are required
- Wordpress 4+ is required.
- For development:
- Install Node: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
- Run: `npm install` from the root directory of this theme
- when that finishes, run `gulp`

## The Rundown (Overview)

Your Less files will automatically compile into a style.css file within the theme's root folder and your JavaScript files will be compiled into main.js within the "js" folder (gulp does all of this) and you are up and running.

Gulp is currently watching js/lib and styles/less folders.

This is built for fully responsive site(s)
It offer 2 options: desktop first and mobile first responsive styling which is handled in /less/main.less by importing the different Less files.
We are using [Meyers CSS Reset 2.0](http://meyerweb.com/eric/tools/css/reset/) to reset all default browser styles.

## Coming Soon
Well.. a lot.

- It will eventually be set up so that Gulp will watch and compile all .js files.
- Hopefully, we can build this in a way that it can easily be dropped into most, if not any, project and start up seemlessly.

## License

[MIT License](http://opensource.org/licenses/MIT)