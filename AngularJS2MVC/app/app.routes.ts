import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: HomeComponent },
    { path: 'Home/Index', component: HomeComponent },
    { path: 'Home/About', component: AboutUsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);