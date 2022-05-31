import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService}from   '../../servicios/api/api.service';
import {LoginI}from '../../modelos/login.interface';  
import {ResponseI}from '../../modelos/response.interface';  
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  errorStatus:boolean = false;
  errorMsj:any = " ";
  

  
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  //  this.checkLocalStorage();
  }

  //checkLocalStorage(){
  //  if(localStorage.getItem('token')){
  //    this.router.navigate(['dashboard']);
  //  }
  //}

  onLogin(form: LoginI){
    this.router.navigate(['dashboard']);
    /*
    this.api.loginByEmail(form)
      .subscribe(data => {
        console.log(data); 
        let dataResponse:ResponseI = data;
        //depende de la api si devuelve un ok o un true 
        if(dataResponse.status == "ok"){
          localStorage.setItem("token", dataResponse.result.toke);
          //Redirecciona la api al dashboar
          this.router.navigate(['dashboard']);
        }else{
          this.errorStatus = true;
          this.errorMsj =  dataResponse.result.error_msg; 
        }
      })
      */

  }

}
