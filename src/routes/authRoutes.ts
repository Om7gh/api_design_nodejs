import { Router } from 'express';
import { AUTH_API_NAME } from '../../constants.ts';

const routes = Router();

routes.post(AUTH_API_NAME.USER_CREATE, function (req, rep) {
    return rep.status(201).json({ message: 'register route' });
});

routes.post(AUTH_API_NAME.USER_LOGIN, function (req, rep) {
    return rep.status(201).json({ message: 'login route' });
});

export default routes;
