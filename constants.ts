export const FT_UID = process.env.FT_UID;
export const FT_SECRET = process.env.FT_SECRET;

export const FRONT_URL = process.env.FRONT_URL;
export const AUTH = '/auth';
export const FTAPI_URL = 'https://api.intra.42.fr';
export const OAUTH = `${FTAPI_URL}/oauth`;

export const getOauthTokenUrl = (code: string): string =>
  `${OAUTH}/token?code=${code}&grant_type=authorization_code&client_id=${FT_UID}&client_secret=${FT_SECRET}&redirect_uri=${FRONT_URL}${AUTH}`;