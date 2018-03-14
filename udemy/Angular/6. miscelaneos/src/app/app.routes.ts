import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CssComponent } from './components/css/css.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'css', component: CssComponent },
    // { path: 'path', component: FeatureComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
