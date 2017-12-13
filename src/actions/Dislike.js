import request from 'superagent';
import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/DislikeActionTypes';
const requestDislike = (id) => ({
  type: types.FETCH_DISLIKE_REQUEST,
  id
});

const receiveDislike = (response) => ({
  type: types.FETCH_DISLIKE_SUCCESS,
  response
});

const errorDislike = () => ({
  type: types.FETCH_DISLIKE_ERROR
});

export function fetchDislike(id) {
  return (dispatch) => {
    dispatch(requestDislike());

    return request
      .get(`${API_ROOT}/post/${id}/dislike`)
      .end((err, response) => {
        err ? dispatch(errorDislike()) : dispatch(receiveDislike(response));
      });
  };
}
