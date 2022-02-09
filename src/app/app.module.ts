import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    //AboutComponent,
    //ContactComponent,
    //HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
