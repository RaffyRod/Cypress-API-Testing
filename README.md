
# API testing using Cypress

This project automates different  API responses from https://reqres.in/ using the Cypress framework, generating reports and running into github actions as CI.

Some of the API request that were automated are listed below:
## API Reference

#### List Users

```http
  GET /api/users
```

|Request type| Endpoints     | Expected Response Code                |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/users?page=2` | `200` |

#### List <Resource>

```http
  GET /api/unknown
```

|Request type| Endpoints     | Expected Response Code                |
| :-------- | :------- | :------------------------- |
| `GET` | `/api/unknown` | `200` |


#### Create user registry

```http
  POST /api/users
```

|Request type| Endpoints  |Request Body   | Expected Response Code                |
| :-------- | :------- | :------------------------- |:------------------------- |
| `POST` | `/api/users` |`name : morpheus, job : leader `| `201` |


#### Update user registry

```http
  PUT /api/users/2
```

|Request type| Endpoints |  Request Body    | Expected Response Code                |
| :-------- | :------- | :------------------------- |:------------------------- |
| `PUT` | `/api/users/2` |`name: morpheus, job: zion resident`| `200` |

#### Update user registry using PATCH

```http
  PATCH /api/users/2
```

|Request type| Endpoints |  Request Body    | Expected Response Code                |
| :-------- | :------- | :------------------------- |:------------------------- |
| `PATCH` | `/api/users/2` |`name: morpheus, job: zion resident`| `200` |



#### Delete user registry

```http
  DELETE /api/users/2
```

|Request type| Endpoints     | Expected Response Code                |
| :-------- | :------- | :------------------------- |
| `DELETE` | `api/register` | `204` |


#### Register user successfully

```http
  POST /api/register
```

|Request type| Endpoints  |Request Body   | Expected Response Code                |
| :-------- | :------- |:------------------------- |:------------------------- |
| `POST` | `/api/register` | `email=eve.holt@reqres.in, password=pistol`|`200` |



#### Register user Unsuccessfully

```http
  POST /api/register
```

|Request type| Endpoints  |Request Body   | Expected Response Code                |
| :-------- | :------- |:------------------------- |:------------------------- |
| `POST` | `/api/register` | `"email":"sydney@fife"`|`400` |


#### Login user Successfully

```http
  POST /api/login
```

|Request type| Endpoints  |Request Body   | Expected Response Code                |
| :-------- | :------- |:------------------------- |:------------------------- |
| `POST` | `/api/login` | `email: eve.holt@reqres.in, password:cityslicka `|`200` |


#### Login user Unsuccessfully

```http
  POST /api/login
```

|Request type| Endpoints  |Request Body   | Expected Response Code                |
| :-------- | :------- |:------------------------- |:------------------------- |
| `POST` | `/api/login` | `email: peter@klaven `|`400` |





## Tech Stack

* [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Nodejs.](https://nodejs.org/en/about/)
* [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
* [GitHub Actions.](https://docs.github.com/en/actions)
* [cypress-mochawesome-reporter.](https://www.npmjs.com/package/cypress-mochawesome-reporter)
* [ESlint.](https://eslint.org/docs/latest/user-guide/getting-started)




## Before Installing

* [Nodejs.](https://nodejs.org/en/download/) must be installed in order to run the project.



## Installation



* Clone the repository from Github.

```bash
  git clone https://github.com/RaffyRod/Cypress-API-Testing.git
```

* Install all packages and dependencies for the project.


```bash
  npm install  
```

## Run Locally


Go to the project directory

```bash
  cd Cypress-API-Testing
```

Install dependencies

```bash
  npm install
```

## Start Cypress

### Run using the Cypress GUI

```bash
  npx cypress open
```

* Select E2E testing in order to get access.

* Select a browser from the list (chrome is always a good option).

* Start testing any API file by just clicking on it.

### Run Headless  (without Cypress GUI)

Go to the project directory

```bash
  cd Cypress-API-Testing
```

From the terminal type in

```bash
  npm run test-windows
```

In order to run the project on Windows OS.

or

```bash
  npm run test
```

In order to run the project on Linux and Mac OS.


* After running a HTML report will be generated and saved at the  `cypress/reports` folder.

## Must Know


* For API negative test cases was used `failOnStatusCode: false` , so it can continue and do the assertions.
* It was implemented the ESlint linter to ensured the code best practices and performance.
* It was commented only specific parts of the code, if someone reads teh entire code easily will understand it.
* In order to locally run the Linter (ESlint) just type in the terminal `npm run lint` or to run and fix `npm run lint-fix`
