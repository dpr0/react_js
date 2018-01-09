import { connect } from 'react-redux';
import BlogList from 'components/ui/BlogList';
import { likePost } from 'actions/Like';
import { fetchPosts } from 'actions/Posts';

const stateToProps = (state) => ({
  items:       state.posts.entries,
  loading:     state.posts.loading,
  error:       state.posts.error,
  page:        state.posts.page,
  postsLength: state.posts.postsLength
});

const actionToProps = (dispatch) => ({
  likeFunc: (id, type) => (dispatch(likePost(id, type))),
  pageClick: (page) => (dispatch(fetchPosts(page, 'post')))
});

// const options = {pure: true, areStatesEqual: (next, prev) => shallowEqual(prev.items, next.items)};

export default connect(stateToProps, actionToProps)(BlogList);
