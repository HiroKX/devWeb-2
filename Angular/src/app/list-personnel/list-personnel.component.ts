import { Component } from '@angular/core';
import {Person} from "../model/Person";
import { ListPersonnelService } from "../service/list-personnel.service";
@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrl: './list-personnel.component.scss'
})
export class ListPersonnelComponent {
  personnel!: Person[];

  public constructor(public listPersonnelService: ListPersonnelService) {
    this.listPersonnelService.fetch().subscribe((data:Person[]) => {
      this.personnel = data;
    });
  }

  delete(id: string) {
    this.listPersonnelService.delete(id).subscribe(personnel => {
      this.personnel = personnel;
    });
  }

}
