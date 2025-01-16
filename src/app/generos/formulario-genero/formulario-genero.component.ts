import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayusculas } from '../../compartidos/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-genero',
  imports: [MatButtonModule,RouterLink,MatFormFieldModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent {
private formbuilder = inject(FormBuilder)

  form = this.formbuilder.group({
    nombre:['',{validators:[Validators.required,primeraLetraMayusculas()]}]
  })
  obtenerErrorCampoNombre():string{
    let nombre = this.form.controls.nombre;
    if ( nombre.hasError('required')){
      return "El campo nombre es requerido";
    }
    if(nombre.hasError('primeraLetraMayusculas')){
      return nombre.getError('primeraLetraMayusculas').mensaje;
    }
    return "";
  }
  guardarCambios(){
    console.log(this.form.value);
    if(!this.form.valid){
      return;
    }

    
  }
}
