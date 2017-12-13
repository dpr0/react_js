import request from 'superagent';
import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/LikeActionTypes';
const requestLike = (id) => ({
  type: types.FETCH_LIKE_REQUEST,
  id
});

const receiveLike = (response) => ({
  type: types.FETCH_LIKE_SUCCESS,
  response
});

const errorLike = () => ({
  type: types.FETCH_LIKE_ERROR
});

export function fetchLike(id) {
  return (dispatch) => {
    dispatch(requestLike());

    return request
      .post(`${API_ROOT}/post/${id}/like`)
      .end((err, response) => {
        err ? dispatch(errorLike()) : dispatch(receiveLike(response.body));
      });
  };
}
