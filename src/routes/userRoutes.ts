import { Router } from 'express';
import { USER_API_NAME } from '../../constants.ts';
const routes = Router();

routes.get(USER_API_NAME.GET_USERS, function (req, rep) {
    rep.status(200).json({ message: 'get all users' });
});

routes.get(USER_API_NAME.GET_USER_BY_ID, function (req, rep) {
    return rep.status(200).json({ message: 'get unique user by id' });
});

routes.delete(USER_API_NAME.DELETE_USER, function (req, rep) {
    return rep.status(200).json({ message: 'delete unique user by id' });
});

routes.put(USER_API_NAME.UPDATE_USER, function (req, rep) {
    return rep.status(200).json({ message: 'update user info by id' });
});

export default routes;
