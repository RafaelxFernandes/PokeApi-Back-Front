import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

  pokeApiUrl = 'https://pokeapi.co/api/v2/';
  private httpOptions = {
  	headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) {
    console.log('Hello Pokemon Service');
  }

  checkPokemon(pokemon):Observable<any>{
    return this.http.get(this.pokeApiUrl + 'pokemon/' + pokemon).map(res => res);
  }
}
