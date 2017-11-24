const servers = ['localhost:3000', 'krsz.ru', '192.168.1.21'];
const apiServer = servers[1];
export const apiCamerasLink = () => `http://${apiServer}/api/v1/camera_models.json`;
export const apiCameraLink = (id) => `http://${apiServer}/api/v1/camera_models/${id}.json`;
