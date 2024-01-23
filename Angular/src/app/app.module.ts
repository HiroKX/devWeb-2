import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { CarteComponent } from './component/carte/carte.component';
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './component/header/header.component';
import { DrawerComponent } from './component/drawer/drawer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ListPersonnelComponent } from './component/list-personnel/list-personnel.component';
import { ContactComponent } from './component/contact/contact.component';
import { GraphComponent } from './component/graph/graph.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LangueBoutonComponent } from './component/langue-bouton/langue-bouton.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatLineModule} from "@angular/material/core";
import { BadgeChefDirective } from './directive/badge-chef.directive';
import { FormulaireComponent } from './component/list-personnel/formulaire/formulaire.component';
import {MatInputModule} from "@angular/material/input";
import { AjoutPopupComponent } from './component/ajout-popup/ajout-popup.component';
import { EditionComponent } from './component/list-personnel/edition/edition.component';
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarteComponent,
    HeaderComponent,
    DrawerComponent,
    ListPersonnelComponent,
    ContactComponent,
    GraphComponent,
    LangueBoutonComponent,
    BadgeChefDirective,
    FormulaireComponent,
    AjoutPopupComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatMenuModule,
    MatLineModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
