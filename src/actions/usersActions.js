import { USERS_TYPES } from '../actionTypes';
import httpRequest from '../httpreq/httpRequest';
const URL = 'https://jsonplaceholder.typicode.com/users/1';

const getUsers = () => async dispatch => {
  try {
    const res = await httpRequest({
      url: URL
    });
    dispatch({
      type: USERS_TYPES.GET_USERS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_TYPES.USERS_ERROR,
      payload: e.message
    });
  }
};

const userActions = {
  getUsers
};
export default userActions;
