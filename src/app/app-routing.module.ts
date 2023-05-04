import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';
import { FormLoginComponent } from './Components/form-login/form-login.component';
import { TablaComponent } from './Components/tabla/tabla.component';
import { FormFarmaciasComponent  } from './Components/Forms/form-farmacias/formFarmacias.component';
import { FormFarmacosComponent } from './Components/Forms/form-farmacos/formFarmacos.component';
import { formClientesComponent } from './Components/Forms/form-clientes/formClientes.component';


const routes: Routes = [
  {path:"farmacos", component:FarmacosComponent},
  {path:"farmacias", component:FarmaciasComponent},
  {path:"clientes", component:ClientesComponent},
  {path:"Login",component:FormLoginComponent},
  {path:"tabla",component:TablaComponent},
  {path:"Forms/form-farmacias",component:FormFarmaciasComponent},
  {path:"Forms/form-farmacos",component:FormFarmacosComponent},
  {path:"Forms/form-clientes",component:formClientesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
