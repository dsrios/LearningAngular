import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Modulo para usar formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ReactiveFormsModule: Es necesario para la creacion de formularios a traves de la aproximacion por data.
import { HttpModule } from '@angular/http';

// Componentes

import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
