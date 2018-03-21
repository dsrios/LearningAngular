import { RouterModule, Routes } from '@angular/router';


// Components
import { HomeComponent } from './component/home/home.component';
import { PreciosComponent } from './component/precios/precios.component';
import { ProtegidaComponent } from './component/protegida/protegida.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'precios', component: PreciosComponent},
    { path: 'protegida', component: ProtegidaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
