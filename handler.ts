import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import axios from 'axios';
import middy from 'middy';
import { cors } from 'middy/middlewares';

import { getOauthTokenUrl } from './constants';

export const hello: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
      context: context,
    }, null, 2),
  };
}

export const tokenNoCors: APIGatewayProxyHandler = async (event, _context) => {
  const { queryStringParameters, httpMethod } = event;
  console.log(getOauthTokenUrl(queryStringParameters.code));
  console.log(httpMethod);
  if (httpMethod !== 'GET')
    return {
      statusCode: 200,
      body: 'wrong method',
    };
  if (queryStringParameters.code === undefined)
    return {
      statusCode: 400,
      body: 'Bad request',
    };
  const response = await axios.post(getOauthTokenUrl(queryStringParameters.code));
  return {
    statusCode: 200,
    body: response.data.access_token
  };
}

/*
export const tokenOption: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: 'ok',
  };
}
*/

export const token = middy(tokenNoCors).use(cors());
