import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events : { type: string, 
    eventNumber: number}[] =[] ;

  title = 'components-assignment';

  onGameStarted(eventNumber: {eventNumber: number}){
    if(eventNumber.eventNumber > 0 && eventNumber.eventNumber % 2 == 0) {
      this.events.push({
        type: 'even',
        eventNumber: eventNumber.eventNumber
      });
    } else if(eventNumber.eventNumber % 2 != 0 ) {
      this.events.push({
        type: 'odd',
        eventNumber: eventNumber.eventNumber
      });
    } 
  }

}
