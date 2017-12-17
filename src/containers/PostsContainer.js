import { connect } from 'react-redux';
import BlogList from 'components/ui/BlogList';

const stateToProps = (state) => ({
  items:   state.posts.entries,
  loading: state.posts.loading,
  error:   state.posts.error
});

export default connect(stateToProps)(BlogList);
