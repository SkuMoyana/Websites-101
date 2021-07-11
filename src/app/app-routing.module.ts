import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferslistComponent } from './offerslist/offerslist.component';

const routes: Routes = [
  
  {path:'offerslist', component : OfferslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
