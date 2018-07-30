import { MaterializeAction } from "angular2-materialize";
import { Component, OnInit, EventEmitter } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon.service';
import { TrainerService } from '../../../services/trainer/trainer.service';


@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {
	pokemons;

	pokemonsError: boolean = false;

	modalActions = new EventEmitter<string|MaterializeAction>();

	idadeError: boolean = false;

	numeroIdError: boolean = false;

	constructor(public pokemonservice: PokemonService, public trainerservice: TrainerService) { }

	ngOnInit() {
	}
	
	onClick(){
		console.log("Entrei na funcao");
	}

	onSubmit(login) {
		console.log(login);
		this.trainerservice.registerTrainer(login.value.nome, login.value.numeroId, login.value.pokemon)
			.subscribe(
				(res) => {
					console.log(res);
				});
	}

	abreModal(){
		this.modalActions.emit({action:"modal", params:['open']});
	}

	fechaModal(){
		this.modalActions.emit({action:"modal", params:['close']});
	}

	checkPokemon(pokemon) {
		this.pokemonservice.checkPokemon(pokemon.value).subscribe(
			(res)=>{
			/*console.log(res.sprites.front_default);*/
			this.pokemons = res;
			console.log(res);
			console.log(this.pokemons);
			this.pokemonsError = false;
		},
		(error)=>{
			this.pokemonsError = true;
		});
	}

	checkIdade(idade){
		if(idade.value < 10){
			this.idadeError = true;
		} else{
			this.idadeError = false;
		}
	}

	checkNumeroId(numeroId){
		if(numeroId.value.toString().length != 8){
			this.numeroIdError = true;
		} else{
			this.numeroIdError = false;
		}
	}
}