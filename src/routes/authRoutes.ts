import { Router } from 'express';
import { AUTH_API_NAME } from '../../constants.ts';
import { bodyValidation } from '../middleware/bodyValidation.ts';
import z from "zod"

const loginSchema = z.object({
    username: z.string(),
})

const routes = Router();

routes.post(AUTH_API_NAME.USER_CREATE, bodyValidation(loginSchema) ,function (req, rep) {
    return rep.status(201).json({ message: 'register route' });
});

routes.post(AUTH_API_NAME.USER_LOGIN, function (req, rep) {
    return rep.status(201).json({ message: 'login route' });
});

export default routes;
