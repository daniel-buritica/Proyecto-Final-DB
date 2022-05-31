import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from'../../modelos/response.interface';
import {PacienteI} from '../../modelos/paciente.interface';
import {ListapacientesI} from '../../modelos/listapacientes.interface';


import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/schedule.umb.com/"

  constructor(private http:HttpClient) { }

loginByEmail(form:LoginI):Observable<ResponseI>{
  let direccion = this.url + "auth";
  return this.http.post<ResponseI>(direccion,form);
}

getAll():Observable<ListapacientesI[]>{
  let direccion = this.url + "getall";
  return this.http.get<ListapacientesI[]>(direccion);
}

get(id:any):Observable<PacienteI>{
  let direccion = this.url + "get/" + id;
  return this.http.get<PacienteI>(direccion);
}

putPatient(form:PacienteI):Observable<ResponseI>{
  let direccion = this.url + "update";
  return this.http.put<ResponseI>(direccion,form);

}

deletePatient(form:PacienteI):Observable<ResponseI>{
  let direcion = this.url + "delete";
  let Options = {
    Headers: new HttpHeaders({
      'Conten-type': 'application/json'
    }),
    body:form
  };
  return this.http.delete<ResponseI>(direcion,Options);
}
deleteDates(form:PacienteI):Observable<ResponseI>{
  let direcion = this.url + "deleteDate";
  let Options = {
    Headers: new HttpHeaders({
      'Conten-type': 'application/json'
    }),
    body:form
  };
  return this.http.delete<ResponseI>(direcion,Options);
}

postPatient(form:PacienteI):Observable<ResponseI>{
  let direccion = this.url + "create";
  return this.http.post<ResponseI>(direccion,form);
}

postDates(form:PacienteI):Observable<ResponseI>{
  let direccion = this.url + "createDates";
  return this.http.post<ResponseI>(direccion,form);
}
}
