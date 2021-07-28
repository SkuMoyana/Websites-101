import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: PageComponent, data: {page: 'home'}},
  {path: 'about', component: AboutComponent, data: {page: 'about'}},
  {path: 'contact', component: ContactComponent, data: {page: 'contact'}},
  {path: 'personalInformation', component: PageComponent, data: {page: 'personalInformation'}},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
