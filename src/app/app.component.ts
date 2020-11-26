import { Component, Input } from '@angular/core';
import { ClickTravelService } from './services/click-travel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  isDreamDestination: true;
  destinations: any[];
  
  @Input() destinationName: string;

  title = 'Choose your dream destination...';

  constructor(private clicktravelService: ClickTravelService) {
    
  }

  ngOnInit() {
    this.destinations = this.clicktravelService.getDestination;
}
}
