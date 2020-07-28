import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  titleExercice: string = "Title sur exercice 1";
  interpolationPhrase: string = "";
  
  clickExercice() {
    console.log("evenement click sur button");
    this.interpolationPhrase = "J'ai cliqué sur le bouton."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
