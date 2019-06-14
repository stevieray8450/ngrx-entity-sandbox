import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import * as fromPet from './reducers/pet.reducer';
import { PetEffects } from './effects/pet.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PetFormComponent } from './pet-form/pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([PetEffects]),
    StoreModule.forFeature('pet', fromPet.reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
