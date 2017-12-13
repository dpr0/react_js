import { assign } from 'lodash';
import * as types from 'constants/actionTypes/DislikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  dislikes: 0
};

export default function (state = initialState, action) {
  switch (action) {
    case types.FETCH_DISLIKE_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_DISLIKE_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_DISLIKE_SUCCESS:
      return assign({}, initialState, { likes: action.dislikes });
    default:
      return state;
  }
}