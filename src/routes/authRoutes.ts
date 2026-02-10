import { Router } from 'express';

const routes = Router();

routes.post('/register', function (req, rep) {
    return rep.status(201).json({ message: 'register route' });
});

routes.post('/login', function (req, rep) {
    return rep.status(201).json({ message: 'login route' });
});


export default routes;
