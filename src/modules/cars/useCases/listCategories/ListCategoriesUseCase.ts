import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    const allCategories = this.categoriesRepository.list();
    return allCategories;
  }
}

export { ListCategoriesUseCase };
