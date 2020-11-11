import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddCicloComponent } from './components/ciclos/add-ciclo/add-ciclo.component';
import { ListarCicloComponent } from './components/ciclos/listar-ciclo/listar-ciclo.component';
import { UpdateCicloComponent } from './components/ciclos/update-ciclo/update-ciclo.component';


const ROUTES: Routes = [
  { path: 'listar', component: ListarCicloComponent },
  { path: "ciclo/add", component: AddCicloComponent },
  { path: "editar/:id", component: UpdateCicloComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
