import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectAllPets, selectPetState } from '../selectors/pet.selectors';
import { AddPet } from '../actions/pet.actions';
import { getNewId } from '../util/state.utils';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  pets: Pet[];
  form: FormGroup;

  constructor(private store: Store<State>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAllPets))
      .subscribe(pets => {
        this.pets = pets;
      });

    this.store.pipe(select(selectPetState))
      .subscribe(state => {
        console.log(state);
      });

    this.setForm();
  }

  onAddPetClicked(): void {
    this.store.dispatch(new AddPet({
      name: this.form.get('name').value,
      age: this.form.get('age').value,
      id: getNewId(this.pets)
    }));

    this.form.reset();
  }

  private setForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });

    this.form.valueChanges.subscribe(form => this.onFormValueChanges(form));
  }

  private onFormValueChanges(form: any): void {
    console.log(form);
  }

}
