import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu site'
  numero_sorte = 16

  ngOnInit() {
  	console.log(this.title)
  	this.imprimeNumero();
  }
 
 imprimeNumero() {
 	console.log(this.numero_sorte)
 }

}
