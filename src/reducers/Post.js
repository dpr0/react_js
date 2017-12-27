import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';
import update from 'immutability-helper';

const initialState = {
  loading: false,
  error:   false,
  entry:   null
};

function likeFunc(post, id, count) {
  return update(
    post, { like: { $apply: () => count } }
  );
}

function dislikeFunc(post, id, count) {
  return update(
    post, { dislike: { $apply: () => count } }
  );
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initialState, { loading: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    case likeTypes.LIKE: {
      return assign({}, state, { entry: likeFunc(state.entry, action.id, action.count) });
    }
    case likeTypes.DISLIKE: {
      return assign({}, state, { entry: dislikeFunc(state.entry, action.id, action.count) });
    }
    default:
      return state;
  }
}