import {fetchPost} from 'actions/Post';
import * as types from 'constants/actionTypes/PostActionTypes';
import {API_CALL} from 'middleware/API';

describe('Post Action', () => {
  it('should return correct action', () => {
    const expectedAction = {
      [API_CALL]: {
        endpoint: '/post/1',
        method: 'get',
        query: {},
        types: [
          types.FETCH_POST_REQUEST,
          types.FETCH_POST_SUCCESS,
          types.FETCH_POST_ERROR
        ]
      }
    };
    expect(fetchPost(1)).toEqual(expectedAction);
  });
});