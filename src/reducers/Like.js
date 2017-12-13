import { assign } from 'lodash';
import * as types from 'constants/actionTypes/LikeActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  likes: 0
};

export default function (state = initialState, action) {
  switch (action) {
    case types.FETCH_LIKE_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_LIKE_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_LIKE_SUCCESS:
      return assign({}, initialState, { likes: action.likes });
    default:
      return state;
  }
}