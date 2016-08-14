"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var weather_service_1 = require('../weatherService/weather.service');
var weather_details_component_1 = require('../weatherDetails/weather-details.component');
var WeatherForCityComponent = (function () {
    function WeatherForCityComponent(weatherService, route) {
        this.weatherService = weatherService;
        this.route = route;
        this.show = false;
    }
    WeatherForCityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.cityName = params['city'];
            _this.weatherService.getWeather(_this.cityName).then(function (forecast) { return _this.forecast = forecast; });
        });
    };
    WeatherForCityComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WeatherForCityComponent.prototype.handleClickDetails = function () {
        this.show = !this.show;
    };
    WeatherForCityComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/weatherForCity/weather.component.html',
            styleUrls: ['app/weatherForCity/weather.component.css'],
            providers: [weather_service_1.WeatherService],
            directives: [weather_details_component_1.WeatherDetailsComponent]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService, router_1.ActivatedRoute])
    ], WeatherForCityComponent);
    return WeatherForCityComponent;
}());
exports.WeatherForCityComponent = WeatherForCityComponent;
//# sourceMappingURL=weather.component.js.map