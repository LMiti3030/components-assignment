import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  eventNumber: number = 0;

  timerRef : any;
  interval: number = 1000;

  @Output() gameStarted = new EventEmitter<{eventNumber: number}>();

  onStart(){
    this.timerRef = setInterval( () => {
      this.eventNumber = this.eventNumber +1;
      this.gameStarted.emit({eventNumber: this.eventNumber});
      // console.log(this.eventNumber);
    }, this.interval);
  }

  onStop(){
    this.eventNumber = 0;
    clearInterval( this.timerRef);
  }

}
