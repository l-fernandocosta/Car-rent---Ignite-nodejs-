import { Specification } from "../../model/Specification";
import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    const allSpecifications = this.specificationRepository.list();
    return allSpecifications;
  }
}

export { ListSpecificationUseCase };
