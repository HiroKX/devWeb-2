import { Component } from '@angular/core';
import {Person} from "../model/Person";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  name: string = 'Angular';

  personne!: Person;

  constructor(public httpClient: HttpClient){
    this.httpClient.get<Array<Person>>('http://localhost:3000/api/employe').subscribe(data => {
      this.personne = data[1];
    });
  }

  random(){
    this.httpClient.get<Person>('http://localhost:3000/api/employe/random').subscribe(data => {
      this.personne = <Person>(data);
    });
  }

}
