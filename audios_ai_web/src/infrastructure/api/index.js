import axios from 'axios';

const api = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
  });

  return {
    async get(endpoint, params = {}, headers = {}) {
      return instance.get(endpoint, { params, headers }).then(res => res.data);
    },
    async post(endpoint, data, headers = {}) {
      return instance.post(endpoint, data, { headers }).then(res => res.data);
    },
    async put(endpoint, data, headers = {}) {
      return instance.put(endpoint, data, { headers }).then(res => res.data);
    },
    async delete(endpoint, params = {}, headers = {}) {
      return instance.delete(endpoint, { params, headers }).then(res => res.data);
    },
  };
};

export default api;
