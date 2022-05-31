import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PacienteI} from '../../modelos/paciente.interface';
import {ApiService} from '../../servicios/api/api.service';
import {ResponseI} from '../../modelos/response.interface';
import {AlertasService} from '../../servicios/alertas/alertas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  datosPaciente:PacienteI | undefined;
  editarForm = new FormGroup({
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

  constructor(private router:Router, private activatedroute:ActivatedRoute, 
    private api:ApiService, private alerta:AlertasService) { }

  ngOnInit(): void {
    //optener el id de la dirreción http
    let citaId = this.activatedroute.snapshot.paramMap.get('id');
    this.api.get (citaId).subscribe(data => {
      
      this.datosPaciente = data;
      this.editarForm.setValue({        
        'id': this.datosPaciente.id,
        'nombre': this.datosPaciente.nombre,
        'apellido': this.datosPaciente.apellido,
        'cedula': this.datosPaciente.cedula,
        'telefono': this.datosPaciente.telefono,
        'correo': this.datosPaciente.correo,
        'direccion': this.datosPaciente.direccion,
        'fecha_registro': this.datosPaciente.fecha_registro,       
        'fecha_cita': this.datosPaciente.fecha_cita,       
        'tipo': this.datosPaciente.tipo,       
        'estado': this.datosPaciente.estado
      });      
    })      
  }

  postForm(form:PacienteI){

    this.api.putPatient(form).subscribe(data =>{      
      let respuesta:ResponseI = data;
      let connectionOK:boolean = true;
      if(connectionOK){
        this.alerta.showSuccess('Datos Actializados', "Successfull");
      }else{
        this.alerta.showError('Error actualizando','Error');
      }
    });
  }

  eliminar(){
    let datos:PacienteI = this.editarForm.value;    
    this.api.deletePatient(datos).subscribe(data => {
      let respuesta:ResponseI = data;
      let connectionOK:boolean = true;
      if(connectionOK){
        this.alerta.showSuccess('Datos Eliminados', "Successfull");
        this.router.navigate(['dashboard']);
      }else{
        this.alerta.showError('Error Eliminando','Error');
      }
    })
  }
  
  salir(){
    this.router.navigate(['dashboard']);
  }


}
