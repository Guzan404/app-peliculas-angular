import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-crear-genero',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {

  router = inject(Router);
  private formbuilder = inject(FormBuilder)

  form = this.formbuilder.group({
    nombre:['',{validators:[Validators.required]}]
  })
  obtenerErrorCampoNombre():string{
    let nombre = this.form.controls.nombre;
    if ( nombre.hasError('required')){
      return "El campo nombre es requerido";
    }
    return "";
  }

  guardarCambios(){
    // this.router.navigate(['/generos']);
    console.log(this.form.value);
  }
}
