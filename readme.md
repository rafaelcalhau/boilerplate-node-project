# boilerplate-node-project

[![MIT License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](LICENSE)

Boilerplate application for Node.js with express, typescript, sucrase, mongoose, authenticated REST API, and implementing security best practices.

## Security best practices

1. **Embracing linter security rules**: [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) - This project helps to identify potential security hotspots.
2. **Disable the header X-Powered-By**: Your application won't show that was developed using Express.js, preventing to send this info to attackers.


### Reference
[We’re under attack! 23+ Node.js security best practices](https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d)

