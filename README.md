Project Desperado
==========================

This is the final project for CSC 440 at [Northern Kentucky University](http://www.nku.edu/).  It consists of two parts: an API and a front-end web client that consumes it.  The API is built using [Ruby on Rails API](https://github.com/rails-api/rails-api) and the front-end application is built using [AngularJS](https://angularjs.org/).

All documents required to turn in to class such as meeting minutes and diagrams are located in the `deliverables` directory.

## Setup Local Development Environment

Setting up a local development environment for this project requires each part of the application be setup separately.  They are independent of each other so that each part can move forward without the other.

### Setting up the API

> The following should be completed in the `api` directory.

Before starting, [rbenv](https://github.com/sstephenson/rbenv) must be installed.  To make this easier, we recommend using the excellent [rbenv installer script](https://github.com/fesplugas/rbenv-installer).  [MySQL](http://www.mysql.com/) should also be installed.

The first step should be to setup the environment variables.  Make a copy of the `.rbenv-vars.example` and rename it to `.rbenv-vars`.  Fill out the database environment variables to match the local MySQL server on the machine.

Next, install all of the dependencies using `bundle install`.  Create the database and run the migrations with the following:

```
bundle exec rake db:create
bundle exec rake db:migrate
````

Lastly, run `bundle exec rails server` to start the rails server on port 3000.  The API should now be up and running!

### Setting up the Front-End Application

> The following should be completed in the `frontend` directory.

Before starting, [node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/) should be installed.  npm comes with many of the node.js packages available.  Bower and the Grunt CLI must also be installed.  Once npm is installed, run `sudo npm install -g grunt-cli bower` to get them.

All dependencies can be installed using npm and Bower.  Run the following:

```
npm install
bower install
```

Lastly, run `grunt serve` to start the server on port 9000.  There is a proxy setup in the development environment that will send all requests to the local API instead of the one in production.
