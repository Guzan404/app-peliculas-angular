import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceComponent } from './generos/indice/indice.component';

export const routes: Routes = [
    {path: '',component: LandingPageComponent},
    {path:'generos',component:IndiceComponent}
];
