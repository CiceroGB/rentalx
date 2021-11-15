import { Specification } from '../../model/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private speficications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.speficications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const speficication = new Specification();

    Object.assign(speficication, {
      name,
      description,
      created_at: new Date(),
    });

    this.speficications.push(speficication);
  }

  list(): Specification[] {
    return this.speficications;
  }

  findByName(name: string): Specification {
    const speficication = this.speficications.find(
      (speficication: Specification) => speficication.name === name,
    );

    return speficication;
  }
}

export { SpecificationsRepository };
