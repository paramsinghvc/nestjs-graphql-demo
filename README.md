# GraphQL NestJS React Demo

## How to use

Download the example [or clone the repo](https://github.com/paramsinghvc/nestjs-graphql-demo):

<!-- #default-branch-switch -->

```sh
git clone git@github.com:paramsinghvc/nestjs-graphql-demo.git
cd nestjs-graphql-demo
```

## Server

```sh
cd server
```
- Install Postgres and create a user and a database named demo.
- Configure the username, password, database name in `src/app.module.ts`
```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: '',
  // more options...
}),
```
- Install Node modules and run:

```sh
yarn # or npm install
yarn start:debug # or npm run start:debug
```
The server will be started on port 3001 🚀. Port can be configured in `src/main.ts`
Navigate to `http://localhost:3001/graphql` in the browser to see the graphql schema.

<img width="1223" alt="Screenshot 2023-08-19 at 10 00 35" src="https://github.com/paramsinghvc/nestjs-graphql-demo/assets/4329912/0052725b-0a86-41f4-8ff1-022d791b09b2">


<br />
<br />
<br />
## Client
```sh
cd ../client
```
Install Node modules and run:

```sh
yarn # or npm install
yarn dev # or npm run dev
```

The app will start on port 3000. The port can be configured using `-p` [flag](https://medium.com/frontendweb/how-to-change-port-in-nextjs-1b99930bb81f).

<img width="898" alt="Screenshot 2023-08-19 at 11 59 14" src="https://github.com/paramsinghvc/nestjs-graphql-demo/assets/4329912/bc55eb06-5e9b-4d37-9c74-26f123515af1">


