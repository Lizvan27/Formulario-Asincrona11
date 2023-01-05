import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formLogin! : FormGroup;
  Nombre!:String;
  email!: String;
  Mensaje! : String;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit():void{
    this.formLogin = this.formBuilder.group({
      Nombre:[" ",
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
    email:["",
      [
        Validators.required,
        Validators.email
      ]
    ],
    Mensaje:["",
    [
      Validators.required,
      Validators.minLength(10)
    ]
    ]
    })

    //this.loadAPI()
  }

  //function para simular la carga de un API
  loadAPI():any{
    const response = {
      Nombre: 'docente',
      email: 'docente@gmail.com',
      Mensaje: "Hola Mundo"
    };

    this.formLogin.patchValue(response);


    this.formLogin.patchValue(
      {
        email:response.Nombre,
        password: response.email,
        term: response.Mensaje
      }
    )
  
  }
  send(): any{
    console.log(this.formLogin.value)
  }
}  

