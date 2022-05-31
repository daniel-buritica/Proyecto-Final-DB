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
  datosPaciente:PacienteI | undefined;
  citaP:String |undefined;
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
      let respuesta:ResponseI = data;
      let connectionOK:boolean = true;
      if(connectionOK){
        this.alerta.showSuccess('Cita creada', "Successfull");
        this.router.navigate(['dashboard']);
      }else{
        this.alerta.showError('Cita creada','Error');
      }
    });
    this.router.navigate(['dashboard']);
  }

  salir(){
    
  }

  createDates(){
    console.log("Entre");
    let datos:PacienteI = this.nuevoForm.value;    
    this.api.postDates(datos).subscribe(data => {
      console.log(data);
    })

  }
  
  buscarById(){
    let datos:PacienteI = this.nuevoForm.value;    
    this.api.get (datos.id).subscribe(data => {
      
      this.datosPaciente = data;
      this.nuevoForm.setValue({        
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

  actualizar(){
    let datos:PacienteI = this.nuevoForm.value;
    this.api.putPatient(datos).subscribe(data =>{      
      let respuesta:ResponseI = data;
      let connectionOK:boolean = true;
      if(connectionOK){
        this.alerta.showSuccess('Datos Actualizados', "Successfull");
        this.router.navigate(['dashboard']);
      }else{
        this.alerta.showError('Error Datos Actualizados','Error');
      }
    });
    this.limpiar();
    this.limpiar();
  }

  eliminar(){
    let datos:PacienteI = this.nuevoForm.value;    
    this.api.deleteDates(datos).subscribe(data2 =>{      
      console.log(data2);
    });
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
    this.limpiar();
  }

  limpiar(){
    this.nuevoForm.setValue({        
      'id':   '',
      'nombre': '',
      'apellido': '',
      'cedula':'',
      'telefono':'',
      'correo': '',
      'direccion': '',
      'fecha_registro':'',
      'fecha_cita': '',
      'tipo': '',
      'estado': '',
    });
  }

}
