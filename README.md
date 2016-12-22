# GurpsyMcGurpsFace

This repository contains a visualitation for a Gurps Charactersheet model, as
created by [gurpsdomain][]. 

## Setup
This project relies on node and npm and is based on the [Angular2 quickstart][quickstart].

To start working with this project, install node, go to the project directory
and run 

```shell
npm install
```

This will install all dependencies.  To run the application from node, run


```shell
npm start
```

Open a browser and point it to `http://localhost:4200`. This will serve up the
application.

To run the tests, run 

```shell
npm test
```

If you want to create a distribution run the command

```shell
npm run-script build
```

This will create a `dist` directory. This needs to be served by a web server. To
run it locally execute `python -m SimpleHTTPServer` from this directory.

[gurpsdomain]: https://github.com/gurpsdomain/gurpsdomain
[quickstart]: https://angular.io/docs/ts/latest/quickstart.html
