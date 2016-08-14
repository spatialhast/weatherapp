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
var WeatherService = (function () {
    function WeatherService() {
    }
    Object.defineProperty(WeatherService.prototype, "baseRequestUrl", {
        get: function () {
            return 'http://api.openweathermap.org/data/2.5/weather';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeatherService.prototype, "appid", {
        get: function () {
            return '6159c6ae97924d4e4ab84d690ccdee43';
        },
        enumerable: true,
        configurable: true
    });
    WeatherService.prototype.getIconUrl = function (iconCode) {
        return 'http://openweathermap.org/img/w/' + iconCode + '.png';
    };
    WeatherService.prototype.getWeather = function (cityName) {
        var _this = this;
        var requestUrl = this.baseRequestUrl + "?q=" + cityName + "us&units=metric&mode=json&APPID=" + this.appid;
        return fetch(requestUrl)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var _a = data.main, temp = _a.temp, humidity = _a.humidity, pressure = _a.pressure;
            var iconUrl = _this.getIconUrl(data.weather[0].icon);
            var windSpeed = data.wind.speed;
            return {
                iconUrl: iconUrl,
                temp: temp,
                humidity: humidity,
                pressure: pressure,
                windSpeed: windSpeed
            };
        })
            .catch(function (error) { return console.log(error); });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map