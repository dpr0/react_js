import request from 'superagent';
import { API_ROOT } from 'constants/API';
import { LIKE, DISLIKE } from 'constants/actionTypes/LikeActionTypes';

const requestLike = (id, count) => ({
  type: LIKE,
  id,
  count
});

const requestDislike = (id, count) => ({
  type: DISLIKE,
  id,
  count
});

export function likeFunc(id) {
  return (dispatch) => {
    return request
      .post(`${API_ROOT}/post/${id}/like`)
      .end((err, response) => {
        dispatch(requestLike(id, response.body.count));
      });
  };
}

export function dislikeFunc(id) {
  return (dispatch) => {
    return request
      .post(`${API_ROOT}/post/${id}/dislike`)
      .end((err, response) => {
        dispatch(requestDislike(id, response.body.count));
      });
  };
}
