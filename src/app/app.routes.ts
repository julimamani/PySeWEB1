import { Routes } from '@angular/router';
import { CoordenadasComponent } from './components/coordenadas/coordenadas.component';
import path from 'node:path';
import { TraductorComponent } from './components/traductor/traductor.component';
export const routes: Routes = [
    { path:'cg', component: CoordenadasComponent},
    { path:'traductor', component: TraductorComponent},

];
