import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModuleComponent } from './component/module/module.component';
import { StructureComponent } from './component/structure/structure.component';

// Meterial
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

// Drag and Drop
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    ModuleComponent,
    StructureComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DndModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
