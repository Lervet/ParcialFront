import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formFarmacos',
  templateUrl: './formFarmacos.component.html',
  styleUrls: ['./formFarmacos.component.css']
})

export class FormFarmacosComponent {
  
  farmacosForm= new FormGroup({
    name: new FormControl('',Validators.required),
    cod: new FormControl('',Validators.required),
    cant: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.farmacosForm.controls["name"].value);
    console.log(this.farmacosForm.controls["cod "].value);
    console.log(this.farmacosForm.controls["cant "].value);
    
  }

}
