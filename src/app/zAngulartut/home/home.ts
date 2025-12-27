import { Component, input, signal } from '@angular/core';
import { Housinglocation } from '../housinglocation/housinglocation';
import { HousingLocationInfo } from '../Models/housinglocationInfo';

@Component({
  selector: 'app-home',
  imports: [Housinglocation],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  homerLogo = signal('../angularitems/homer.PNG');

  


  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

  
}
