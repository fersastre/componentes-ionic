import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent ,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: false // Con esto forzamos a que el usuario elija una opccion y no lo cierre
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);
  }
}

