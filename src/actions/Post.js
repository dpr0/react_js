import request from 'superagent';
import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostActionTypes';
const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (res) => ({
  type: types.FETCH_POST_SUCCESS,
  res
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost());

    return request
      .get(`${API_ROOT}/posts/${id}`)
      .end((err, res) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(res));
      });
  };
}
