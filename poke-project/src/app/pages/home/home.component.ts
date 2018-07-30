import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer/trainer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	trainers = [];

	constructor(public trainerservice: TrainerService) { }

	ngOnInit() {
		//document.body.style.backgroundImage = "url('abstract.jpg')";
		//document.body.style.backgroundSize = "cover";
		//document.body.style.backgroundAttachment = "fixed";
		this.trainerservice.getTrainer().subscribe((res) => {
			console.log(res);
			for(let i = 0; i < res.data.length; i++){
				this.trainers.push(res.data[i]);		
			}
		});
	}

	killTrainer(i: number) {
		console.log(i);
		this.trainerservice.deleteTrainer(this.trainers[i].id).subscribe((res) => {
		});
		this.trainers.splice(i, 1);
	}
}