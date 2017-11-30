import MainLayout from 'components/layouts/MainLayout';
import PostContainer from 'components/containers/PostContainer';
import AboutContainer from 'components/containers/AboutContainer';
import BlogPageContainer from 'components/containers/BlogPageContainer';
import { postPath, rootPath, aboutPath } from 'helpers/routes';

const Index = {
  path: rootPath(),
  component: BlogPageContainer
};

const PostRoute = {
  path: postPath(),
  component: PostContainer
};

const About = {
  path: aboutPath(),
  component: AboutContainer
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, About ]
};
