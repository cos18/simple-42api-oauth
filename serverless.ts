import { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'eval42-serverless',
  },
  frameworkVersion: '>=1.72.0',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: [
    'serverless-dotenv-plugin',
    'serverless-webpack',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    region: 'ap-northeast-2',
  },
  functions: {
    token: {
      handler: 'handler.token',
      events: [
        {
          http: {
            method: 'get',
            path: 'token',
            cors: true,
          }
        },
      ]
    }
  }
}

module.exports = serverlessConfiguration;
