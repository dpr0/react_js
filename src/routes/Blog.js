import MainLayout        from '../components/layouts/MainLayout';
import { postPath }      from '../helpers/routes';
import BlogPageContainer from '../components/containers/BlogPageContainer';
import PostContainer     from '../components/containers/PostContainer';

const Index = {
  path: '/',
  component: BlogPageContainer
};

const PostRoute = {
  path: postPath(),
  component: PostContainer
};

export default {
  component: MainLayout,
  childrenRoutes: [ Index, PostRoute ]
};
