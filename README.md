# video-stream-blocker
Backend API to check concurrent user video streams


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0

# Getting started
- Clone the repository
```
git clone  https://github.com/mahlatsimalatji/video-stream-blocker.git

- Install dependencies
```
cd video-stream-blocker
npm install

- Build and run the project
```
npm start

Navigate to `http://localhost:3000`

## Installing TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src/routes**           | Contain all express routes, separated by module/area of application                       
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/test**             | Contains all test files                                                           |
| **src**/index.ts         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   | tsconfig.json            | Config settings for compiling source code only written in TypeScript    
| jest.config.js           | Config settings for Jest unit testing
| tsconfig.json           | Config settings for TypeScript compilation
| Dockerfile               | Instructions for building docker container


### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `dev`                   | Runs full build before starting all watch tasks. Can be invoked with `npm dev`                                         |
| `test`                    | Runs build and run tests using jest. Can be invoked with `npx tst`        |
