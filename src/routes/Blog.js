import MainLayout        from 'components/layouts/MainLayout';
import AboutContainer    from 'containers/AboutContainer';
import { fetchPosts }    from 'actions/Posts';
import { fetchPost }     from 'actions/Post';
import { postPath, rootPath, aboutPath, pieChartPath } from 'helpers/routes';
import PostsContainer    from 'containers/PostsContainer';
import PostContainer     from 'containers/PostContainer';
import PieChartContainer from 'containers/PieChartContainer';

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

const About = {
  path: aboutPath(),
  component: AboutContainer
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, About, PieChartRoute ]
};
