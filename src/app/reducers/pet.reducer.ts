import { PetActions, PetActionTypes } from '../actions/pet.actions';
import { Pet } from '../models/pet';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Pet> {
}

export const adapter: EntityAdapter<Pet> = createEntityAdapter<Pet>();
export const initialPetState = adapter.getInitialState();

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export function reducer(state = initialPetState, action: PetActions): State {
  switch (action.type) {
    case PetActionTypes.LoadPets:
      return state;
    case PetActionTypes.LoadPetsSuccess:
      return state;
    case PetActionTypes.AddPet:
      return adapter.addOne(action.pet, state);
    default:
      return state;
  }
}
