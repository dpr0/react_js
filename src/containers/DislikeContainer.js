import { connect } from 'react-redux';
import flowRight from 'lodash';

const stateToProps = (state) => ({
  likes:      state.post.entry,
  isFetching: state.post.isFetching,
  error:      state.post.error
});

const actionsToProps = (dispatch) => ({
  like: flowRight(dispatch, like), // (params) => dispatch(deposit(params))
});

const like = (value) => ({
  type: 'LIKE',
  value
});

// export default connect(stateToProps, actionsToProps)();
