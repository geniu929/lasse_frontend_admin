import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultatEnqueteComponent } from './resultat-enquete/resultat-enquete.component';
import { ChartsModule } from 'ng2-charts';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { AddEnqueteComponent } from './add-enquete/add-enquete.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ResultatEnqueteComponent,
    StatistiquesComponent,
    AddEnqueteComponent,
    AcceuilComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
