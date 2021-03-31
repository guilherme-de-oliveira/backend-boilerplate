# OdwMonitor
ODW-Monitor is an application for monitoring ODW Processes and its availability.

The project was generated with:
NPM version 6.14.5
Node.js version 14.4
Angular CLI version 10.2.0
Angular version 10.2.2

Run `npm run dev:front` for a front dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server side

Run `npm run dev:back` for a front dev server. Navigate to `https://localhost:3000/`. The app will automatically reload if you change any of the source files. 
It will

## Run application

Run `npm run serve` for an application dev server. Navigate to `https://localhost:3000/` to see the web pages rendering from server side.

## Run application

Run `npm run dev` for an application dev server. Navigate to `http://localhost:4200/` to see the application running on client side.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Test api

Create a certodw.cert and kwyodw.pwd files and replace it on `./certs`.
Run the following commands on linux cmd to create them:
`openssl req -nodes -new -x509 -keyout keyodw.key -out certodw.cert`

Add those files at Postman. Go to: Files -> Settings -> Certificates -> Client Certificate -> Add Certificate.
