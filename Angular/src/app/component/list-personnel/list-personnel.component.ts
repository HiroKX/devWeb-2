import { Component } from '@angular/core';
import {Person} from "../../model/Person";
import { ListPersonnelService } from "../../service/list-personnel.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AjoutPopupComponent} from "../ajout-popup/ajout-popup.component";
import {mergeMap} from "rxjs";
@Component({
  selector: 'app-list-personnel',
  templateUrl: './list-personnel.component.html',
  styleUrl: './list-personnel.component.scss'
})
export class ListPersonnelComponent {
  personnel!: Person[];

  view = 'card';

  dialogStatus: string = "inactive";
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;

  public constructor(public listPersonnelService: ListPersonnelService, public dialog: MatDialog) {
    this.listPersonnelService.fetch().subscribe((data:Person[]) => {
      if(data == null){
        this.personnel = [];
      }else{
        this.personnel = data;
      }
    });
  }

  delete(id: string) {
    this.listPersonnelService.delete(id).subscribe(personnel => {
      if(personnel == null){
        this.personnel = [];
      }else{
        this.personnel = personnel;
      }
    });
  }

  switchView() {
    if (this.view === 'card') {
      this.view = 'list';
    } else {
      this.view = 'card';
    }
  }

  add(person: Person) {
    this.listPersonnelService
      .create(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
      });
  }

  update(person: Person) {
    this.listPersonnelService
      .update(person)
      .pipe(mergeMap(() => this.listPersonnelService.fetch()))
      .subscribe(personnel => {
        this.personnel = personnel;
        this.hideDialog();
      });
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person:any)=> {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }
}
