import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import axios from 'axios';
import { cors } from 'middy/middlewares';

import { getOauthTokenUrl } from './constants';

const middy = require('middy')

export const tokenNoCors: APIGatewayProxyHandler = async (event, _context) => {
  const { queryStringParameters } = event;
  if (queryStringParameters.code === undefined)
    return {
      statusCode: 400,
      body: 'Bad request. Need code query!',
    };
  const response = await axios.post(getOauthTokenUrl(queryStringParameters.code));
  return {
    statusCode: 200,
    body: response.data.access_token
  };
}

export const token = middy(tokenNoCors).use(cors());
