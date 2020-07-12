import axios from 'axios';

const axiosInstance = axios.create();

const request = ({url, headers, method, body}) => {
  const options = {
    method,
    url,
  };

  if (headers) {
    options['headers'] = headers;
  }

  if (body) {
    options['data'] = body;
  }

  return axiosInstance(options);
};

export default request;
