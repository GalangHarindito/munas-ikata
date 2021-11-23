import axios from 'axios';

const BASIC_URL = 'https://app-dev.munasikataupn.com'
const BASE_URL = `${BASIC_URL}/api/v1`;
//export const BASIC_URL = 'https://app-dev.munasikataupn.com'
//export const URL = 'https://stage-ikata.semoga.online/api/';
export const URL = 'https://ikata.semoga.online/api/';

const fetch = (url, method, paramBody, paramHeader) => {
  const options = {
    method: method,
    url: url,
    data: paramBody,
    headers: paramHeader,
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => resolve(res))
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };
        if (!err.response) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export const sentEmail = async (data) => {
  await fetch(`${BASE_URL}/contactEmail`,'POST', data, '')
}