import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// Paginas
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});


// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })


