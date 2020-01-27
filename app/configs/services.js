import {post, put, get, remove} from './networking';

// end point
export const services = {
  login: async params => post('api/users/v1', params),
  register: async params => post('api/users/v1/register', params),
  getData: async header => get('api/users/v1', {}, header),
};

export default services;
