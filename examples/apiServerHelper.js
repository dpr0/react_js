const servers = ['http://krsz.ru', 'http://localhost:3000', 'http://192.168.1.21'];
const apiServer = servers[0];
export const apiCamerasLink = () => `${apiServer}/api/v1/camera_models.json`;
export const apiCameraLink = (id) => `${apiServer}/api/v1/camera_models/${id}.json`;

export const cameraPath  = (id = ':id') => `/camera/${id}`;
export const camerasPath = () => '/cameras';
import CameraContainer from '../components/containers/CameraContainer';
import ForumPageContainer from '../components/containers/ForumPageContainer';
import { cameraPath, camerasPath } from '../helpers/routes';

const CamerasRoute = {
  path: camerasPath(),
  component: ForumPageContainer
};

const CameraRoute = {
  path: cameraPath(),
  component: CameraContainer
};

export default {
  component: MainLayout,
  childRoutes: [ CameraRoute, CamerasRoute ]
};

import MainLayout from '../components/layouts/MainLayout';
