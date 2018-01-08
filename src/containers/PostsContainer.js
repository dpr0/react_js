import { connect } from 'react-redux';
import BlogList from 'components/ui/BlogList';
import { likePost } from 'actions/Like';

const stateToProps = (state) => ({
  items:   state.posts.entries,
  loading: state.posts.loading,
  error:   state.posts.error
});

const actionToProps = (dispatch) => ({
  likeFunc: (id, type) => (dispatch(likePost(id, type)))
});

// const options = {pure: true, areStatesEqual: (next, prev) => shallowEqual(prev.items, next.items)};

export default connect(stateToProps, actionToProps)(BlogList);
