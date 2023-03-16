import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';

const routes: Routes = [
  {path:"farmacos", component:FarmacosComponent},
  {path:"farmacias", component:FarmaciasComponent},
  {path:"clientes", component:ClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
