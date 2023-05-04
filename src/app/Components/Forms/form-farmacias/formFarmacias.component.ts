import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formFarmacias',
  templateUrl: './formFarmacias.component.html',
  styleUrls: ['./formFarmacias.component.css']
})

export class FormFarmaciasComponent {
  
  farmaciasForm= new FormGroup({
    name: new FormControl('',Validators.required),
    dire: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.farmaciasForm.controls["name"].value);
    console.log(this.farmaciasForm.controls["dire"].value);
    
  }

}
