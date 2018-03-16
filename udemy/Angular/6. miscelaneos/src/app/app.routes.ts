import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


// Rutas hijas
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './components/usuario/detalle-usuario.component';



// usuario/10/nuevo
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { // Ruta principal
        path: 'user/:id',
        component: UsuarioComponent,
        // Ruta hija
        children: [
                    {path: 'nuevo', component: NuevoUsuarioComponent},
                    {path: 'editar', component: EditarUsuarioComponent},
                    {path: 'detalle', component: DetalleUsuarioComponent},
                    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }

                  ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
