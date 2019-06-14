import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { PetActionTypes, PetActions } from '../actions/pet.actions';



@Injectable()
export class PetEffects {


  // @Effect()
  // loadPets$ = this.actions$.pipe(
  //   ofType(PetActionTypes.LoadPets),
  //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //   concatMap(() => EMPTY)
  // );
  //

  constructor(private actions$: Actions<PetActions>) {}

}
