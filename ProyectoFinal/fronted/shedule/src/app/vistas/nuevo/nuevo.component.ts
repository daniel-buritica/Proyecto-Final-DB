import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import {PacienteI} from '../../modelos/paciente.interface';
import {ResponseI} from '../../modelos/response.interface';
import {ApiService} from '../../servicios/api/api.service';
import {AlertasService} from '../../servicios/alertas/alertas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    cedula: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    direccion: new FormControl(''),
    fecha_registro: new FormControl(''),
    fecha_cita: new FormControl(''),
    tipo: new FormControl(''),
    estado: new FormControl(''),
  });

  constructor(private api:ApiService,private router:Router, private alerta:AlertasService ) { }

  ngOnInit(): void {
  }

  postForm(form:PacienteI){
    console.log(form);
    this.api.postPatient(form).subscribe(data => {
      console.log(data);
    })
  }

  salir(){
    this.router.navigate(['dashboard']);
  }


}
