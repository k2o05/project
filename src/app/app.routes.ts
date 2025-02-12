import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PolicyComponent } from './policy/policy.component';
import { DailyComponent } from './daily/daily.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'services', component:ServicesComponent},
    {path:'policy', component:PolicyComponent},
    {path:'daily',component:DailyComponent}
];
