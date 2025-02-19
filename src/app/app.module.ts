import { BrowserModule } from '@angular/platform-browser';
import { (NgModule) } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Agrega FormsModule en la lista de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
