import * as fromPet from '../reducers/pet.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectPetState = createFeatureSelector<fromPet.State>('pets');

export const selectAllPets = createSelector(
  selectPetState,
  fromPet.selectAll
);

export const selectPetById = (petId: number) => createSelector(
  selectAllPets,
  pets => pets.find(p => p.id === petId)
);
