import axios from 'axios';


export const getAllInputData = payload => {
    const URL = '/input';
    return axios(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json', // whatever you want
      },
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const searchData = payload => {
    const URL = 'http://localhost:3000/data';
    return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json', // whatever you want
      },
      data: payload,
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };


