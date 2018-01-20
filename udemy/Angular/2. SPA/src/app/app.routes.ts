import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }// Ruta general si no hace match
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// Usa la forma nueva de redirecionar http://localhost:4200/home


// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
// Usa la forma antigua de redireccionar http://localhost:4200/#/home
// Es una mejor forma de enviar parametros y asi hay mas navegadores que lo soportan

