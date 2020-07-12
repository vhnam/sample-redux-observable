import get from 'lodash/get';

import requestStatus from '../constants/requestStatus';

import request from '../../helpers/request';
import buildQueryString from '../../helpers/buildQueryString';

export const getRequestType = (type) => {
  return (status) => `${type}_${status}`;
};

export default ({type, method, url, query, headers, body, mapper}) => {
  return async (dispatch) => {
    const requestType = getRequestType(type);

    dispatch({
      type: requestType(requestStatus.REQUEST),
    });

    try {
      const queryString = buildQueryString(query);
      const requestUrl = `${url}${queryString}`;
      const response = await request({
        url: requestUrl,
        headers,
        method,
        body,
      });

      const data = get(response, ['data']);
      const payload = mapper ? mapper(data) : data;

      dispatch({
        type: requestType(requestStatus.SUCCESS),
        payload,
      });
    } catch (error) {
      dispatch({
        type: requestType(requestStatus.FAILURE),
      });
    }
  };
};
