import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private speficicationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists =
      this.speficicationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }
    this.speficicationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
