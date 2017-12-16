import { connect } from 'react-redux';
import Post from 'components/ui/Post';

const stateToProps = (state ) => ({
  item:    state.post.entry,
  loading: state.post.loading,
  error:   state.post.error
});

export default connect(stateToProps)(Post);
