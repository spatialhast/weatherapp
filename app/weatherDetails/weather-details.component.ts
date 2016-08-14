import { Component, Input } from '@angular/core';

@Component({
    selector: 'weather-details',
    templateUrl : 'app/weatherDetails/weather-details.component.html', 
    styleUrls: ['app/weatherDetails/weather-details.component.css']
})

export class WeatherDetailsComponent {
    @Input() pressure;
    @Input() humidity;
    @Input() windSpeed;
}
