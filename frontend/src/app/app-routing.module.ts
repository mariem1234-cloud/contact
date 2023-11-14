import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpdateComponent } from './contacts/update/update.component';
import { ViewComponent } from './contacts/view/view.component';
import { AjoutComponent } from './contacts/ajout/ajout.component';
import { ListComponent } from './contacts/list/list.component';


const routes: Routes = [
  {path:'', redirectTo:'contact/admin', pathMatch:'full' },
  {path:'contact/ajout', component:AjoutComponent},
  {path:'contact/admin', component:ListComponent},
  {path:'contact/update/:id', component:UpdateComponent},
  {path:'contact/view/:id', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
