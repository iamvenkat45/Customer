# Assignment
Angular App

## Environment Setup
- To install the project dependencies, firstly need to install the npm, bower and grunt. Node js can be installed from [here](https://nodejs.org/en/), which gives the npm
- npm is installed as part of Node.js. To verfiy npm is installed type `npm -v` and for node `node -v`.
- [Bower](http://bower.io/): A package manager for the web. 

	> `npm install -g bower`
- [Grunt CLI](https://github.com/gruntjs/grunt-cli): The Grunt command line interface tool, Install this globally and you'll have access to the grunt command anywhere on your system.

	> `npm install -g grunt-cli`
- Verify both the bower and grunt are installed using `bower -v` and `grunt -v`

## Project Dependencies

Run the following commands to install the project specific dependencies. Check the dependencies from `bower.json` and `package.json`. Before running the command make sure you're at the projects root path.

	> `npm install`
	> `grunt bower`

- If any npm installation related error happens please delete the `/node_modules` folder and run the below command  to clear the cache and run the npm install again.

	> `npm cache clean`

## Execute

After installing all the dependencies run the following command to execute and preview the app.

- Run `grunt` for building and `grunt serve` for preview.

## Screenshots

The Screenshots for each of the feature can be found in screentshots folder.