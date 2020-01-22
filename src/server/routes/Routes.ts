import { Router } from 'express';
import contactRoutes from './contact';

const routes = Router();

routes.use('/', contactRoutes);

export default routes;
