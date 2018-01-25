import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export function updatePost(id, post) {
  return {
    [API_CALL]: {
      endpoint: `/post/${id}/edit`,
      method: 'post',
      query: {post},
      types: [
        types.UPDATE_POST_REQUEST,
        types.UPDATE_POST_SUCCESS,
        types.UPDATE_POST_ERROR
      ]
    }
  };
}
