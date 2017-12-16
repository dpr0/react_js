import MainLayout        from 'components/layouts/MainLayout';
import AboutContainer    from 'containers/AboutContainer';
import { fetchPosts }    from 'actions/Posts';
import { fetchPost }     from 'actions/Post';
import { likeFunc }      from 'actions/Like';
import { dislikeFunc }   from 'actions/Like';
import { postPath, rootPath, postLikePath, aboutPath, pieChartPath, postDislikePath } from 'helpers/routes';
import PostsContainer    from 'containers/PostsContainer';
import PostContainer     from 'containers/PostContainer';
import PieChartContainer from 'containers/PieChartContainer';
import LikeContainer     from 'containers/LikeContainer';

const Index = {
  path: rootPath(),
  component: PostsContainer,
  prepareData: (store) => { store.dispatch(fetchPosts()); }
};

const PieChartRoute = {
  path: pieChartPath(),
  component: PieChartContainer,
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
  prepareData: (store, query, params) => { store.dispatch(likeFunc(params.id)); }
};

const PostDislikeRoute = {
  path: postDislikePath(),
  component: LikeContainer,
  prepareData: (store, query, params) => { store.dispatch(dislikeFunc(params.id)); }
};

const About = {
  path: aboutPath(),
  component: AboutContainer
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, About, PieChartRoute, PostLikeRoute, PostDislikeRoute ]
};
