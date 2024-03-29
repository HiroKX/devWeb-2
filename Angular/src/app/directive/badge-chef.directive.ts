import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {Person} from "../model/Person";

@Directive({
  selector: '[badgeChef]'
})
export class BadgeChefDirective {

  @Input() employe!: Person;

  constructor(private elementRef:ElementRef, private renderer:Renderer2) {
    debugger;
  }


  ngOnInit(): void {
    let isChef:boolean = false;
    this.employe?.titres?.forEach((titre) => {
      if(titre.includes("chef")){
        isChef = true;
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'innerHTML',
          '<em class="material-icons">supervisor_account</em>'
        );
        return;
      }
    })
    if(!isChef)
      this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML','');
  }

  ngOnUpdate(): void {
    this.ngOnInit();
  }

}
