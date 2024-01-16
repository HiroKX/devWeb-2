import { Component } from '@angular/core';
import {Person} from "../model/Person";
import {ListPersonnelService} from "../list-personnel.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  name: string = 'Angular';

  personne!: Person;

  constructor(public listePersonnelService: ListPersonnelService) {
    this.listePersonnelService.fetch().subscribe((data:Person[]) => {
      this.personne = data[1];
    });
  }

  random(){
    this.listePersonnelService.fetchRandom().subscribe(data => {
      this.personne = <Person>(data);
    });
  }

  delete(person: Person){
    this.listePersonnelService.delete(person.id).subscribe(() => {
      this.random();
    });
  }

}
