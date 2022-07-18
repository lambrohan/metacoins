# Metacoins

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

Below are our core services:

- Gateway
- Auth
- Payment
- Web3
- Frontend(nextjs)
- Frontend-e2e(cypress)

## Run it locally

### 1. Local `.env` vars setup

Look for `.env.example` files and make `.env` besides each example file. There must be a env file in each of the following directories -> `root, apps/auth, apps/payment, apps/web3`

### 2. Get `Redis` and `mongodb` up using `docker-compose up -d` from root.

These containers stores the data in `./redis-data` & `./mongo-data` folders and hence may fail to start due to folder permissions. In that case run `sudo chown -R 1001 ./mongo-data` & restart the containers.

### 3. Install npm packages by running `yarn` in root directory.

Prisma types are generated automatically using postinstall but make sure the types are generated after yarn install. If not generate the types.

### 4. Generate Prisma Types (optional)

`yarn generate:all`

### 5. Run Apps

- Backend Services - `yarn dev`
- Backend + Next Frontend - `yarn dev:all`
- Backend gateway is served on port 4000
- Next frontend is served on port 3000
- Swagger url `https://localhost:4000/api`

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
