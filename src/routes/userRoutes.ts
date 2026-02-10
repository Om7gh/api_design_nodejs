import {Router} from "express"

const routes = Router();

routes.get("/users", function(req, rep) {
    return rep.status(200).json({message: "get all users"});
})

routes.get("/users/:id", function(req, rep) {
    return rep.status(200).json({message: "get unique user by id"});
})

routes.post("/users", function(req, rep) {
    return rep.status(201).json({message: "create user"});
})

routes.delete("/users/:id", function(req, rep) {
    return rep.status(200).json({message: "delete unique user by id"});
})

routes.put("/users/:id", function(req, rep) {
    return rep.status(200).json({message: "update user info by id"});
})

export default routes;