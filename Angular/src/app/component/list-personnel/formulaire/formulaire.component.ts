import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../../model/Person";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  form: any;

  @Input() employe: Person;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.employe = {
      id: "",
      titres: []
    };
  }

  cancel() {
    this.cancelEvent$.emit();
  }
  submit(employe: Person) { //Formulaire
    employe.photo = this.employe.photo;
    this.submitEvent$.emit(employe);
  }

  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.employe.titres!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.employe.titres!.indexOf(titre);
    this.employe.titres!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.employe.photo = reader.result;
      }
    }
  }

  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      prenom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      nom: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      email: new FormControl('', Validators.required),
      titres: new FormControl(''),
      sexe: new FormControl(''),
      telephone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d{10}')])),
    });
  }

  ngOnInit() {
    this.form.patchValue({
      id: this.employe.id,
      nom: this.employe.nom,
      prenom: this.employe.prenom,
      email: this.employe.email,
      titres: this.employe.titres || [],
      sexe: this.employe.sexe,
      photo: this.employe.photo,
      telephone: this.employe.telephone
    });
  }

}
