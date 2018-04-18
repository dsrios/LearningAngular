import { RouterModule, Routes } from '@angular/router';


// Components
import { HomeComponent } from './component/home/home.component';
import { PreciosComponent } from './component/precios/precios.component';
import { ProtegidaComponent } from './component/protegida/protegida.component';

// Import auth-guard
import { AuthGuardService } from './services/auth-guard.service';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'precios', component: PreciosComponent},
    { // Ruta protegida
        path: 'protegida',
        component: ProtegidaComponent,
        canActivate: [ AuthGuardService ] // Recibe un arreglo con las validaciones para entrar a esta pagina
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
