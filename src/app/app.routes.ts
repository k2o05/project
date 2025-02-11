import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PolicyComponent } from './policy/policy.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'services', component:ServicesComponent},
    {path:'policy', component:PolicyComponent},
];
