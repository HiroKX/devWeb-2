import { Component } from '@angular/core';
import {Person} from "../../model/Person";
import {ListPersonnelService} from "../../service/list-personnel.service";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  name: string = 'Angular';

  personne!: Person;

  empty!: boolean;

  constructor(public listePersonnelService: ListPersonnelService) {
    this.listePersonnelService.fetch().subscribe((data:Person[]) => {
      if(data != null) {
        this.empty = false;
        this.personne = data[1];
      }
      else {
        this.empty = true;
      }
    });
  }

  random(){
    this.listePersonnelService.fetchRandom().subscribe(data => {
      if(data != null)
        this.personne = <Person>(data);
      else
        this.empty = true;
    });
  }


  delete(person: Person){
    this.listePersonnelService.delete(person.id).subscribe(() => {
      this.random();
    });
  }

}
