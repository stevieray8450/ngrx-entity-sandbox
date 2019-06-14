import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPets from './pet.reducer';

export interface State {
  pets: fromPets.State;
}

export const reducers: ActionReducerMap<State> = {
  pets: fromPets.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
