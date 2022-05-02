import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
  createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
  listSpecificationController.handle(req, res);
});

export { specificationRoutes };
