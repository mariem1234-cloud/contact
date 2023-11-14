import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UpdateComponent } from './contacts/update/update.component';
import { ViewComponent } from './contacts/view/view.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ListComponent } from './contacts/list/list.component';
import { AjoutComponent } from './contacts/ajout/ajout.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    ViewComponent,
    AjoutComponent,
    NavbarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
