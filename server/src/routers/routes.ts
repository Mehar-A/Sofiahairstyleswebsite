import { Router } from 'express';
import adminRouter from '../admin/admin.router';

const routes = Router();

routes.use('/', adminRouter);

export default routes;
