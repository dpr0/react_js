import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostsActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';
import update from 'immutability-helper';

const initialState = {
  loading: false,
  error:   false,
  entries: []
};

function likeFunc(entries, id, count) {
  const index = entries.findIndex((post) => post.id == id);
  let x = update(
    entries,
    { [index]: { like: { $apply: () => count } } }
  );
  return x;
}

function dislikeFunc(entries, id, count) {
  const index = entries.findIndex((post) => post.id == id);
  return update(
    entries,
    { [index]: { dislike: { $apply: () => count } } }
  );
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initialState, { loading: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initialState, { entries: action.response });
    case likeTypes.LIKE: {
      return assign({}, state, { entries: likeFunc(state.entries, action.id, action.count) });
    }
    case likeTypes.DISLIKE: {
      return assign({}, state, { entries: dislikeFunc(state.entries, action.id, action.count) });
    }
    default:
      return state;
  }
}