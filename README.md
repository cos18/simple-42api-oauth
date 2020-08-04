<h1 align="center">🔐 simple-42api-oauth</h1>
<h4 align="center">Simple Backend server for using 42api OAuth!</h4>

This Project is build with [serverless](https://github.com/serverless/serverless) and ❤️

<br>

## 🛠 Development Environment

- Node.js LTS (v12.18+)
- Yarn 1.22+ (`npm install -g yarn`)
- Serverless 1.78+ (`npm install -g serverless`)
  You need to set serverless credentials after installation. See [here](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md).

<br>

## 💻 How to Run
Before you run, you need to create .env file for some constants. Check [.env.sample](.env.sample) for detail.

#### 🏡 Test Project in Local
```bash
sls invoke local -f (function name - ex. token)
```

#### 🏗 Deploy Project

```bash
sls deploy
```
