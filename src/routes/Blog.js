import MainLayout       from 'components/layouts/MainLayout';
// import PostContainer from 'components/containers/PostContainer';
// import BlogPageContainer from 'components/containers/BlogPageContainer';
import AboutContainer   from 'components/containers/AboutContainer';
import { fetchPosts }   from 'actions/Posts';
import { fetchPost }    from 'actions/Post';
import { fetchLike }    from 'actions/Like';
import { fetchDislike } from 'actions/Dislike';
import { postPath, rootPath, postLikePath, postDislikePath, aboutPath } from 'helpers/routes';
import PostsContainer   from 'containers/PostsContainer';
import PostContainer    from 'containers/PostContainer';
import LikeContainer    from 'containers/LikeContainer';
import DislikeContainer from 'containers/DislikeContainer';

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

const PostLikeRoute = {
  path: postLikePath(),
  component: LikeContainer,
  prepareData: (store, query, params) => { store.dispatch(fetchLike(params.id)); }
};

const PostDislikeRoute = {
  path: postDislikePath(),
  component: DislikeContainer,
  prepareData: (store, query, params) => { store.dispatch(fetchDislike(params.id)); }
};

const About = {
  path: aboutPath(),
  component: AboutContainer
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, About, PostLikeRoute, PostDislikeRoute ]
};
