import { connect } from 'react-redux';
import Post from 'components/ui/Post';
import { likePost } from 'actions/Like';

const stateToProps = (state) => ({
  item:    state.post.entry,
  loading: state.post.loading,
  error:   state.post.error
});

const actionToProps = (dispatch) => ({
  likeFunc: (id, type) => (dispatch(likePost(id, type)))
});

export default connect(stateToProps, actionToProps)(Post);
