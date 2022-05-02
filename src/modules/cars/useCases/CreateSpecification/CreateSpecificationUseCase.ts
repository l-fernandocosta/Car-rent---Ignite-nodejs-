import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";
import { ISpecificationDTO } from "../../repositories/ISpecificationRepository";

class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: ISpecificationDTO) {
    const specificationAlreadyExists = this.specificationRepository.findByName({
      name,
    });

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists");
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
