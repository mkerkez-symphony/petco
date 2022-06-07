import { AnimalType } from '../enums/animal-type';
import { GenderType } from '../enums/gender-type';
import { Owner } from './owner';

export class Pet {
  id: string;
  name: string;
  type: AnimalType;
  owner: Owner;
  gender: GenderType;
}
