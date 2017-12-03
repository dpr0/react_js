import { connect } from 'react-redux';

import PostContainer from 'components/containers/PostContainer';

const stateToProps = (state) => ({
  items: state.post.entry,
  isFetching: state.post.isFetching,
  error: state.post.error
});

export default connect(stateToProps)(PostContainer);