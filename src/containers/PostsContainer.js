import { connect } from 'react-redux';

import BlogPageContainer from 'components/containers/BlogPageContainer';

const stateToProps = (state) => ({
  items:      state.posts.entries,
  isFetching: state.posts.isFetching,
  error:      state.posts.error
});

export default connect(stateToProps)(BlogPageContainer);