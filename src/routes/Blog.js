import MainLayout from '../components/layouts/MainLayout';
import PostContainer from '../components/containers/PostContainer';
import CameraContainer from '../components/containers/CameraContainer';
import BlogPageContainer from '../components/containers/BlogPageContainer';
import ForumPageContainer from '../components/containers/ForumPageContainer';
import { postPath, rootPath, cameraPath, camerasPath } from '../helpers/routes';

const Index = {
  path: rootPath(),
  component: BlogPageContainer
};

const CamerasRoute = {
  path: camerasPath(),
  component: ForumPageContainer
};

const PostRoute = {
  path: postPath(),
  component: PostContainer
};

const CameraRoute = {
  path: cameraPath(),
  component: CameraContainer
};

export default {
  component: MainLayout,
  childRoutes: [ Index, PostRoute, CameraRoute, CamerasRoute ]
};
