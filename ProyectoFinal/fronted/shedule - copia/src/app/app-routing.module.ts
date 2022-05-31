import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { ModalComponent } from './vistas/modal/modal.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'nuevo', component:NuevoComponent},
  {path: 'editar/:id', component:EditarComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'modal', component:ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, NuevoComponent, EditarComponent, DashboardComponent, ModalComponent]
