import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {



  nombre: string = 'Fernando';

  usuario = {
    email: '',
    password:''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){ // Aca podemos obtener mediante la variable formulario toda la info del form. 
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
