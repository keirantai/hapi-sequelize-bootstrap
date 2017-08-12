# Bootstrap for HAPI + Sequelize ORM

## Introduction

This is a bootstrap project to assist you create a restful API by using HAPI with Sequelize ORM as backend data model support.

HAPI is lightweight and simple HTTP framework, and Sequelize is an ORM with multiple databases support i.e. PostgreSQL, MySQL, SQLite and MSSQL.

## Quick Start

**Start a sample project**

```shell
$ git clone <repository url> bootstrap
$ cd bootstrap
$ npm run migration
$ npm start
```

By default, this project includes a Sample model plus basic restful API handler. If you started above, you can make POST, GET and DELETE request to /api/samples without doing any changes.

## File Structure

* *config* - Environment configuration files. node-config is used in this project.
* *controllers* - Contains controllers for handling requests.
* *database* - Default folder to store database file (for sqlite database only).
* *libs* - Library files that includes common scripts for the project.
* *migrations* - Database migration scripts.
* *models* - Data model definitions.
* *routes* - Contains basic routes for handling server requests.
* *tests* - Contains test scripts which are executed by using mocha command.
* *server.js* - Server entry script.

## Create Model

This project complies the same file structure of Sequelize-cli which has */migrations* folder for all database migration scripts and */models* folder for all data models.

To create a new model for your own purpose, you can copy the */model/sample.js* and modify as your own model. Or, you can use Sequelize-cli command to create a new model + migration.

```shell
$ npm install -g sequelize-cli # if you want to install Sequelize-cli as global command
$ sequelize model:create --name <new model name> --attributes '<column1>:<data type>, <column2>:<data type>'
```
