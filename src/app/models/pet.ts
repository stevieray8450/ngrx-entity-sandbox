import { StateEntity } from './state-entity';

export interface Pet extends StateEntity {
  name: string;
  age: number;
}
