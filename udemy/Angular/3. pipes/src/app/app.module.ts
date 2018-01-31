import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Poner las fechas en español al usar los pipes
import { LOCALE_ID } from '@angular/core';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);


// Importar el pipe personalizado
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
