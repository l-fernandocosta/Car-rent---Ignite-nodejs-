import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}
  handle(req: Request, res: Response): Response {
    const all = this.listSpecificationUseCase.execute();
    return res.status(201).json(all);
  }
}

export { ListSpecificationController };
