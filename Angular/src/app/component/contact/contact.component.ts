import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('nom') nom: ElementRef | undefined;
  @ViewChild('prenom') prenom: ElementRef | undefined;

  ngAfterViewInit(){
    this.nom!.nativeElement.innerHTML = "LAGLER";
    this.prenom!.nativeElement.innerHTML = "Robin";
  }

}
