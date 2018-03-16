
import { Routes } from '@angular/router';
import { NuevoUsuarioComponent } from './nuevo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario.component';

export const USUARIOS_ROUTES: Routes = [
    {path: 'nuevo', component: NuevoUsuarioComponent},
    {path: 'editar', component: EditarUsuarioComponent},
    {path: 'detalle', component: DetalleUsuarioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'editar' }
];


