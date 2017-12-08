import { connect } from 'react-redux';

import flowRight from 'lodash';

import PostContainer from 'components/containers/PostContainer';

const stateToProps = (state) => ({
  items:      state.post.entry,
  isFetching: state.post.isFetching,
  error:      state.post.error
});

const actionsToProps = (dispatch) => ({
  // like: flowRight(dispatch, like), // (params) => dispatch(deposit(params))
  // dislike: flowRight(dispatch, dislike)
});

export default connect(stateToProps, actionsToProps)(PostContainer);
