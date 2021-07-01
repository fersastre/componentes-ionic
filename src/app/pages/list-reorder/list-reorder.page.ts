import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] =['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla','Flash'];

  ordenar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){
    console.log(event);
    // Movemos de lugar el elemento en el arreglo
    const itemMover = this.personajes.splice(event.detail.from, 1)[0]; //Solo devuelve el valor 0 con [0]
    this.personajes.splice(event.detail.to,0,itemMover);


    event.detail.complete();
    console.log(this.personajes);
  }


  habilitaOrdenar(){
    this.ordenar= !this.ordenar;
  }

}
