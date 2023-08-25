import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonelComponent } from './personel/personel.component';
import { CarteGriseComponent } from './carte-grise/carte-grise.component';
import { CarteBiomComponent } from './carte-biom/carte-biom.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"pers", component:PersonelComponent},
  {path:"cg", component:CarteGriseComponent},
  {path:"cb", component:CarteBiomComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
