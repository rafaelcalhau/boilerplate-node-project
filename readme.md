# boilerplate-node-project

[![MIT License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](LICENSE)

Boilerplate application for Node.js with express, typescript, sucrase, mongoose, authenticated REST API, and implementing security best practices.

## Getting Started

#### 1. Clone this repo to initialize a new Node project.

    git clone https://github.com/rafaelcalhau/boilerplate-node-project.git myProject

#### 2. Install the dependencies:

    yarn

or

    npm install

#### 3. Rename the environment files to .env and .env.test, respectively, and configure the SECRET and your mongo connection string for both .env and .env.test.

There is a docker-compose file in case you prefer to run your mongo db on Docker. If so, just run:

    docker-compose up -d

## Security best practices

#### 1. **Embracing linter security rules**: [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
This project helps to identify potential security hotspots.

#### 2. **Disable the header X-Powered-By**
Your application won't show that was developed using Express.js, preventing to send this info to attackers.

#### 3. **Use environment variables to store SECRETS**
Very popular and good practice. We should use the package [dotenv](https://github.com/motdotla/dotenv) in order to use .env files in our application

#### 4. **Limit concurrent requests using a middleware**: [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
From the NGINX blog:

Rate limiting can be used for security purposes, for example to slow down brute‑force password‑guessing attacks. It can help protect against DDoS attacks by limiting the incoming request rate to a value typical for real users, and (with logging) identify the targeted URLs. More generally, it is used to protect upstream application servers from being overwhelmed by too many user requests at the same time.

## Testing

We're using Jest and Supertest. These libraries together can offer a lot of possibilities to build complete and trusteable tests. The base structure is already ready for you and there are a few tests available.

- [Jestjs.io](https://jestjs.io/): It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!
- [Supertest](https://github.com/visionmedia/supertest): Super-agent driven library for testing node.js HTTP servers using a fluent API.

To run a test:

    yarn test

or

    npm test

### References
[We’re under attack! 23+ Node.js security best practices](https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d)

