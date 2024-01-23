import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../model/Person";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListPersonnelService {

  constructor(public httpClient: HttpClient) { }

  fetch(): Observable<Person[]> {
    return this.httpClient.get<Array<Person>>('http://localhost:3000/api/employe');
  }

  search(name: string): Observable<Person[]> {
    return this.httpClient.get<Person[]>('http://localhost:3000/api/employe/:name'.replace(':name', name));
  }

  fetchRandom(): Observable<Person> {
    return this.httpClient.get<Person>('http://localhost:3000/api/employe/random');
  }

  delete(id: string): Observable<any> {
    console.log(id);
    return this.httpClient.delete('http://localhost:3000/api/employe/:id'.replace(':id', id));
  }

  create(employe: Person): Observable<Person> {
    return this.httpClient.post<Person>('http://localhost:3000/api/employe/', employe);
  }

  fetchOne(id: string): Observable<Person> {
    return this.httpClient.get<Person>('http://localhost:3000/api/employe/:id'.replace(':id', id));
  }

  update(employe: Person): Observable<Person> {
    return this.httpClient.put<Person>('http://localhost:3000/api/employe/:id'.replace(':id', employe.id), employe);
  }
}
