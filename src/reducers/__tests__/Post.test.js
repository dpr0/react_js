import reducer from 'reducers/Post';
import * as types from 'constants/actionTypes/PostActionTypes';
import * as likeTypes from 'constants/actionTypes/LikeActionTypes';

describe('Post reducer', () => {
  it('should return init state', () => {
    const initialState = {
      loading: false,
      error: false,
      entry: null
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Fetch', () => {
    it('should request fetch post', () => {
      const reducerResult = reducer([], {
        type: types.FETCH_POST_REQUEST
      });
      expect(reducerResult.loading).toEqual(true);
    });

    it('should error fetch post', () => {
      const reducerResult = reducer([], {
        type: types.FETCH_POST_ERROR
      });
      expect(reducerResult.error).toEqual(true);
    });

    it('should success fetch post', () => {
      const reducerResult = reducer([], {
        type: types.FETCH_POST_SUCCESS,
        response: 'good'
      });
      expect(reducerResult).toEqual({
        loading: false,
        error: false,
        entry: 'good'
      });
    });
  });

  describe('Update', () => {
    let state;
    beforeEach(() => {
      state = {
        loading: false,
        error: false,
        entry: 'object'
      };
    });

    it('should request update post', () => {
      const reducerResult = reducer(state, {
        type: types.UPDATE_POST_REQUEST
      });
      state.loading = true;
      expect(reducerResult).toEqual(state);
    });

    it('should error update post', () => {
      const reducerResult = reducer(state, {
        type: types.UPDATE_POST_ERROR
      });
      state.error = true;
      expect(reducerResult).toEqual(state);
    });

    it('should success update post', () => {
      const reducerResult = reducer(state, {
        type: types.UPDATE_POST_SUCCESS,
        response: 'good'
      });
      state.entry = 'good';
      expect(reducerResult).toEqual(state);
    });
  });

  describe('Like', () => {
    let state;
    beforeEach(() => {
      state = {
        loading: false,
        error: false,
        entry: 'object'
      };
    });

    it('should succeed update like', () => {
      const reducerResult = reducer(state, {
        type: likeTypes.LIKE_SUCCESS,
        response: 'good'
      });
      state.entry = 'good';
      expect(reducerResult).toEqual(state);
    });
  });
});