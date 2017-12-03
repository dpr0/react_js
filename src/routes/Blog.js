import MainLayout from 'components/layouts/MainLayout';
// import PostContainer from 'components/containers/PostContainer';
import AboutContainer from 'components/containers/AboutContainer';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
// import BlogPageContainer from 'components/containers/BlogPageContainer';
import { postPath, rootPath, aboutPath } from 'helpers/routes';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

const Index = {
  path: rootPath(),
  component: PostsContainer,
  prepareData: (store) => { store.dispatch(fetchPosts()); }
};

const PostRoute = {
  path: postPath(),
  component: PostContainer,
  prepareData: (store, query, params) => { store.dispatch(fetchPost(params.id)); }
};

const About = {
  path: aboutPath(),
  component: AboutContainer
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, About ]
};
