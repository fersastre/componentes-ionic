import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})

export class SegmentPage implements OnInit {

  textoFiltrar: string = '';
  superHeroes: Observable<any>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getSuperHeroes();
  }


  segmentChanged(ev){

    if(ev.detail.value == 'todos'){
      console.log('entro al todos');
      return this.textoFiltrar = '';  
    }
    this.textoFiltrar = ev.detail.value; 
    console.log(ev.detail.value);
    
  }
}
