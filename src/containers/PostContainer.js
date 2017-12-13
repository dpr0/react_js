import { connect } from 'react-redux';
import BlogItem from 'components/ui/BlogItem';

const stateToProps = (state) => ({
  item:       state.posts.entry,
  isFetching: state.posts.isFetching,
  error:      state.posts.error
});

export default connect(stateToProps)(BlogItem);
