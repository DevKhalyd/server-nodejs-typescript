# REST API with PASSPORT

This project allow to learn some concepts to apply in projects biggers

## Setting up the project

To create the project with node we need to use the `npm` to install the dependencies to run the project

**Note: This steps happens inside the folder**

1. Run `npm iniit -y` (Allow to create a node project of a way easier)
2. Run `tsc --init` (Create a tsconfig.json. This allow to set up the behavior of TypeScript compiler)
3. Run `npm i express morgan mongoose typescript` ... and so on. To install the dependencies and start to use. `typescript` should be install if you use tsc-watch. This actions should be done even if you have ts installed globaly
4. Run `npm i -D tsc-watch @types/express @types/mongoose @types/morgan` ... and so on.
   4.1 `-D` Refers to `devDependencies` what means packages that are only needed for local development and testing. `dependencies` refers to packages required by your application in `production`.
   4.2 `tsc-watch` It's like nodemon listen for changes
   4.3 `@types/morgan @types/moongoose` are types to use with TypeScript and allow use them. These types always must be **install** when use TypeScript with NodeJs

### Setting up TypeScript Compiler

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    //"outFile": "./" /* Concatenate and emit output to single file. */,
    //'outDir' refers where the code is stored when TS finished compilation (Only JS )
    "outDir": "./dist" /* Redirect output structure to the directory. */,
    //'rootDir' refers where TS code is stored (Only TS)
    "rootDir": "./src" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
  }
}
```

Setting up this file to work fine (Copy that settings)

### Tips (Should be)

**package.json**

```json
 "scripts": {
    //Run in heroku (Production)
    "start": "node build/index.js",
    //Run in dv mode
    "dev": "tsc-watch --onSuccess \"node build/index.js\"",
    //Just converts from TS code to JS
    "build": "tsc"
  },
```

You can write some `scripts` to lift up the server faster

**start:** When needs to start the server in heroku (or anywhere)
**dev:** When we are in dev mode start to watch the changes if this compilation is success
**build:** Create the folder with the js code

**Main Folder (Root)**
`{node_modules},{src},congif_files`

**node_modules:** That folder don't should be upload to GitHub
**src:** This folder should be contains all the file to use in the server
**config_files:** These files should be inside the main folder

**.gitignore**

Use this file to ignore the files that can be replaced or deleted

`node_modules/` ignore that folder
`package-lock.json` ignore that file

More info [here](https://www.pluralsight.com/guides/how-to-use-gitignore-file)

## Libraries used

- bcrypt
- cors
- express
- jsonwebtoken
- mongoose
- morgan
- passport
- passport-jwt

### bcrypt

A library to help you hash passwords.

See more info [here](https://www.npmjs.com/package/bcrypt)

### cors

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

See more info [here](https://www.npmjs.com/package/cors)

About [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

### express

In summary allow to create a server to deploy in heroku or another service like that

See more info [here](https://www.npmjs.com/package/express)

### jsonwebtoken

In summary allow to create token with limit duration

See more info [here](https://www.npmjs.com/package/jsonwebtoken)

### mongoose

`Mongoose` is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

See more info [here](https://www.npmjs.com/package/mongoose)

### morgan

HTTP request logger middleware for node.js

See more info [here](https://www.npmjs.com/package/morgan)

### passport

Passport's sole purpose is to authenticate requests. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

See more info [here](https://www.npmjs.com/package/passport)

### passport-jwt

A Passport strategy for authenticating with a JSON Web Token (Libary explained above).

This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.

## Example request to protected route

See how to access to that route

![alt text](/assets/example_request.jpg)

:thumbsup:
