import { Router } from 'express';

import SessionControler from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionControler.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
