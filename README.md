# Soliho
This is an organizational website for SOLIHO Public Affairs.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Dependency

Set up the backend [Soliho-backend](https://karma-runner.github.io).

## Development server

Run `ng serve` for a dev server. 


## Usage

- Install dependencies

```javascript

npm install
```

- Change the url of the backend by modifing `config.ts`. The default url is `http://localhost:3300`

```javascript

'SERVER_URL': 'http://url_for_backend:port'

```

- For development purpose run 

```javascript
ng serve
```
Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

- For production use 

```javascript

ng build -prod
```
The build artifacts will be stored in the `dist/` directory.