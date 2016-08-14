import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weatherService/weather.service';
import { WeatherDetailsComponent } from '../weatherDetails/weather-details.component';

@Component({
    templateUrl : 'app/weatherForCity/weather.component.html', 
    styleUrls: ['app/weatherForCity/weather.component.css'],
    providers: [WeatherService],
    directives: [WeatherDetailsComponent]
})

export class WeatherForCityComponent implements OnInit, OnDestroy {
    
    sub: any;
    cityName: string;
    forecast: any;
    show: boolean=false;

    constructor (
        private weatherService: WeatherService,
        private route: ActivatedRoute
    ) {}
    
    
    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
        this.cityName = params['city'];
        this.weatherService.getWeather(this.cityName).then(forecast => this.forecast = forecast)
        })
    }

    ngOnDestroy(){
       this.sub.unsubscribe(); 
    }

    handleClickDetails() {
        this.show = !this.show;
    }



}



