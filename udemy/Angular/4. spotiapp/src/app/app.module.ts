import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutas
import { app_routing } from './app.routes';

// Services
import { SpotifyService } from './services/spotify.service';


// Modulo para hacer las peticiones GET - POST ...
import { HttpClientModule } from '@angular/common/http';

// Modulo para extraer la informacion de los formularios [(ngModel)]
import { FormsModule } from '@angular/forms';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
