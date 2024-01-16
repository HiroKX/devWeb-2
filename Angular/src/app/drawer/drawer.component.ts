import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;

  public toggleDrawer():void {
    this.drawer.toggle();
  }
}
