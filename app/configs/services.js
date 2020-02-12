import {post, put, get, remove} from './networking';

// end point
export const services = {
  login: async params => post('api/users/v1', params),
  register: async params => post('api/users/v1/register', params),
  getData: async header => get('api/users/v1', {}, header),
  getSoal: async header => get('api/aji/soal/v1?type=latihan', {}, header),
  postSoal: async (payload, header) =>
    post('api/anzalla/soal/v1?id=2', payload, header),
};

export default services;
