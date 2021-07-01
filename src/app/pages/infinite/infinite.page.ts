import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {


  data: any[] = Array(20);


  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll; //Si usamos el infinite scroll de esta manera
  //No necesitamos tener el event en loadData..

  constructor() { }

  ngOnInit() {
  }


  loadData(event) {
    // console.log(event);

    setTimeout(() => {


      if(this.data.length > 50){
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return; // El return es para que no siga ejecutando el codigo de abajo.. 
      }
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      // event.target.complete();
      this.infiniteScroll.complete();

    }, 1500);
  }
}
