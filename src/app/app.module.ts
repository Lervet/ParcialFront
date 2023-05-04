import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FarmaciasComponent } from './Components/farmacias/farmacias.component';
import { FarmacosComponent } from './Components/farmacos/farmacos.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { FormLoginComponent } from './Components/form-login/form-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TablaComponent } from './Components/tabla/tabla.component';
import { formClientesComponent } from './Components/Forms/form-clientes/formClientes.component';
import { FormFarmaciasComponent } from './Components/Forms/form-farmacias/formFarmacias.component';
import { FormFarmacosComponent } from './Components/Forms/form-farmacos/formFarmacos.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FarmaciasComponent,
    FarmacosComponent,
    ClientesComponent,
    FormLoginComponent,
    TablaComponent,
    formClientesComponent,
    FormFarmaciasComponent,
    FormFarmacosComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
