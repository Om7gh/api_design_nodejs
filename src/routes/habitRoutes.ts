import { Router } from 'express';

const routes = Router();

routes.get('/', function (req, rep) {
    return rep.status(200).json({ message: 'get habbit route' });
});

routes.get('/:id', function (req, rep) {
    return rep.status(200).json({ message: 'get habbit by id route' });
});

routes.post('/:id/complete', function (req, rep) {
    return rep.status(200).json({ message: 'complete habbit by id route' });
});

routes.post('/', function (req, rep) {
    return rep.status(200).json({ message: 'create habbit route' });
});

routes.delete('/:id', function (req, rep) {
    return rep.status(200).json({ message: 'delete habbit route' });
});

export default routes;
