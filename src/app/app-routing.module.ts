import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddEnqueteComponent } from './add-enquete/add-enquete.component';
import { ResultatEnqueteComponent } from './resultat-enquete/resultat-enquete.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
  {path: '' , redirectTo: 'acceuil', pathMatch: 'full'},
  {path: 'acceuil' , component: AcceuilComponent},
  {path: 'resultat' , component: ResultatEnqueteComponent},
  {path: 'statistique' , component: StatistiquesComponent},
  {path: 'add' , component: AddEnqueteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
