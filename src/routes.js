import { Router } from 'express';

import SessionControler from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/session', SessionControler.store);
routes.post('/users', UserController.store);

export default routes;
