import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Modulo para usar formularios
import { FormsModule } from '@angular/forms';
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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
