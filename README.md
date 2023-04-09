<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Local run

1. Clone repository
2. Run:
```
$ yarn install
```

3. Intall NestJs CLI
```
$ npm i -g @nestjs/cli
```

4. Run DB
```
$ docker-compose up -d
```

5. Make a copy of ```.env.template``` as ```.env``` and complete it with local values

6. Run DB seed (optional)
```
POST http://localhost:3000/api/v2/seed
```

7. Start dev application
```
$ yarn start:dev
```

## Stack
* NestJS - v9
* MongoDB - v6

# Local Run in Docker

```
$ docker-compose up -d --build pokedex
```

# Production Build

```
$ docker-compose up -d --build pokedex-prod
```