import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  surveyData = [
    {name: 'Bike', value: 105000},
    {name: 'Cars', value: 55000},
    {name: 'Trucks', value: 15000},
    {name: 'Scooter', value: 150000},
    {name: 'Bus', value: 20000}
  ];
}
