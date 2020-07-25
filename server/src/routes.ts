import express from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

// index, show, create, update, delete
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);

routes.get("/points", pointsController.index);
routes.post("/points", pointsController.create);
routes.get("/points/:id", pointsController.show);

// Service Pattern
// Repository Pattern (Data Mapper)

export default routes;