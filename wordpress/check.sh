#!/bin/bash
# Script to execute tests to evaluate and check code meets coding standards

set -euo pipefail
IFS=$'\n\t'

CSC_STANDARDS_DIRECTORY=csc-standards

# remove deploy directory if exists
rm -rdf campbells/

if [ ! -d "$CSC_STANDARDS_DIRECTORY" ]; then
  git clone git@github.com:mediarain/WordPress-Coding-Standards.git $CSC_STANDARDS_DIRECTORY
fi

git -C $CSC_STANDARDS_DIRECTORY pull
composer install -d $CSC_STANDARDS_DIRECTORY --no-dev --no-interaction

# check CSC-IT standards
$CSC_STANDARDS_DIRECTORY/vendor/bin/phpcs --extensions=php -n --ignore=node_modules,custom-gulp,wpcs,$CSC_STANDARDS_DIRECTORY --standard=Wordpress-Rain-Extra-Strict  --colors -p .

set -o xtrace
# js
jscs scripts/main.js
jscs scripts/**/*.js
# jscs scripts/global.js
# jscs scripts/slides/*.js
# jscs scripts/templates/*.js
jscs scripts/main.js
jshint scripts/*.js
# jshint scripts/global.js
# jshint scripts/slides/*.js
# jshint scripts/templates/*.js
jshint scripts/main.js

# less
lessc --lint less/main.less
lessc --lint less/live-chat/window.less
