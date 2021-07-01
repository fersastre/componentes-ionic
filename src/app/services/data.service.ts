import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getUsuarios(){
  return this.http.get('https://jsonplaceholder.typicode.com/users')
}

getMenuOptions(){
  return this.http.get<componente[]>('/assets/data/menu-opt.json')
}


getAlbums(){
  return this.http.get('https://jsonplaceholder.typicode.com/albums')
}

getSuperHeroes(){
  return this.http.get<componente[]>('/assets/data/superheroes.json')
  .pipe(
    delay(1500)
  );
}




}
