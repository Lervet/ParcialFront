import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formClientes',
  templateUrl: './formClientes.component.html',
  styleUrls: ['./formClientes.component.css']
})

export class formClientesComponent {
  
  clientesForm= new FormGroup({
    name: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),
    ced: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.clientesForm.controls["name"].value);
    console.log(this.clientesForm.controls["correo"].value);
    console.log(this.clientesForm.controls["ced"].value);
    
  }

}
