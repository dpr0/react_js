import { connect } from 'react-redux';

const stateToProps = (state) => ({
  items:      state.post.entry,
  isFetching: state.post.isFetching,
  error:      state.post.error
});

// export default connect(stateToProps)();
