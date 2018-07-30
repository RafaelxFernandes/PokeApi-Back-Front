import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

	pokemons = []; //array que irá guardar todos os dados do Pokemon do id em questão
	id: number; //Variável que irá guardar o id do Pokemon que estamos buscando

  	constructor(public pkmnService: PokemonService) { 
  		this.id = 0;
  	}

  	ngOnInit() {

  	}
}
