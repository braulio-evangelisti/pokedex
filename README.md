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
5. Run DB seed
```
POST http://localhost:3000/api/v2/seed
```

## Stack
* NestJS
* MongoDB