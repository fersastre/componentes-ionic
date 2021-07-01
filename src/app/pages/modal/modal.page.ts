import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalcontroller: ModalController) { }

  ngOnInit() {
  }
  
  async mostrarModal(){

    const modal = await this.modalcontroller.create({
      component: ModalInfoPage,
      componentProps:{
        nombre : 'Fernando',
        pais : 'Aregntina'
      }
    });
     await modal.present();

     const resp = await modal.onDidDismiss();

     //onWillDismiss Se ejecuta mucho antes de que se complete el cierre de la modal.  

     console.log(resp)
  }


  
}
