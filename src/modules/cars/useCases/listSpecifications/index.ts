import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationsController";
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
