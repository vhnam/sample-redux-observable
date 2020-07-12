import get from 'lodash/get';

import requestStatus from '../constants/requestStatus';

import request from '../../helpers/request';
import buildQueryString from '../../helpers/buildQueryString';

export const getRequestType = (type) => {
  return (status) => `${type}_${status}`;
};

export default ({
  type,
  method,
  url,
  query,
  headers,
  authorization,
  body,
  mapper,
}) => {
  return async (dispatch, getState) => {
    const requestType = getRequestType(type);

    dispatch({
      type: requestType(requestStatus.REQUEST),
    });

    if (url && method) {
      try {
        if (authorization) {
          const {access_token} = getState().session.data;

          headers = {...headers, Authorization: `Bearer ${access_token}`};
        }

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
    }
  };
};
