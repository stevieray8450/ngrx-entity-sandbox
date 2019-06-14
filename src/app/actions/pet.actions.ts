import { Action } from '@ngrx/store';
import { Pet } from '../models/pet';

export enum PetActionTypes {
  LoadPets = '[Pet] Load Pets',
  LoadPetsSuccess = '[Pet] Loaded Pets Successfully',
  AddPet = '[Pet] Add Pet'
}

export class LoadPets implements Action {
  readonly type = PetActionTypes.LoadPets;
}

export class LoadPetsSuccess implements Action {
  readonly type = PetActionTypes.LoadPetsSuccess;
}

export class AddPet implements Action {
  readonly type = PetActionTypes.AddPet;

  constructor(public pet: Pet) {
  }
}

export type PetActions = LoadPets | LoadPetsSuccess | AddPet;
