import { assign, cloneDeep, find } from 'lodash';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  loading: false,
  error:   false,
  entries: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, { loading: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, { entries: action.response });
    case likeTypes.LIKE_REQUEST:
      return assign({}, state, { loading: true });
    case likeTypes.LIKE_ERROR:
      return assign({}, state, { error: true });
    case likeTypes.LIKE_SUCCESS: {
      const items = cloneDeep(state.entries);
      const item = find(items, ['id', +action.response.id]);
      item.like = action.response.like;
      item.dislike = action.response.dislike;
      return item ? assign({}, state, {entries: items}) : state;
    }
    default:
      return state;
  }
}
