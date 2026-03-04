import { Routes } from '@angular/router';
import { KantoRegionComponent } from './kanto-region/kanto-region.component';
import { JohtoRegionComponent } from './johto-region/johto-region.component';
import { HomeComponent } from './home/home.component';
import { HoennRegionComponent } from './hoenn-region/hoenn-region.component';
export const routes: Routes = [
    // Landing Page (localhost:4200/home)
    {path:'home', component: HomeComponent},
    { path: 'kanto', component: KantoRegionComponent },
  { path: 'johto', component: JohtoRegionComponent },

    //Default Redirect (localhost:4200/)
    {path:'', redirectTo: 'home', pathMatch: 'full' },
    {path:'hoenn', component: HoennRegionComponent}
];
