import * as types from 'constants/actionTypes/LikeActionTypes';
import { API_CALL } from 'middleware/API';

export function likePost(id, type) {
  return {
    [API_CALL]: {
      endpoint: `/post/${id}`,
      method: 'post',
      query: {id, type},
      types: [
        types.LIKE_REQUEST,
        types.LIKE_SUCCESS,
        types.LIKE_ERROR
      ]
    }
  };
}
