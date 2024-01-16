import {Component, Input} from '@angular/core';
import {DrawerComponent} from "../drawer/drawer.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() drawer!: DrawerComponent;

}
