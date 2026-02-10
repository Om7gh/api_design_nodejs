import { Router } from 'express';
import { HABITS_API_NAME } from '../../constants.ts';

const routes = Router();

routes.get(HABITS_API_NAME.GET_HABITS, function (req, rep) {
    return rep.status(200).json({ message: 'get habbit route' });
});

routes.get(HABITS_API_NAME.GET_HABIT_BY_ID, function (req, rep) {
    return rep.status(200).json({ message: 'get habbit by id route' });
});

routes.post(HABITS_API_NAME.HABIT_COMPLETED, function (req, rep) {
    return rep.status(200).json({ message: 'complete habbit by id route' });
});

routes.post(HABITS_API_NAME.HABIT_CREATE, function (req, rep) {
    return rep.status(200).json({ message: 'create habbit route' });
});

routes.delete(HABITS_API_NAME.HABIT_DELETE, function (req, rep) {
    return rep.status(200).json({ message: 'delete habbit route' });
});

export default routes;
