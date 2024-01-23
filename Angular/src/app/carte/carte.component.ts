import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../model/Person";

@Component({
  selector: 'carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent {

  @Input() employe: Person;

  @Output('personDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('personUpdate') update$: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.employe = {
      'id':"0",
    };
  }

  delete() {
    this.delete$.emit(this.employe.id);
  }

  update() {
    this.update$.emit(this.employe);
  }

}
