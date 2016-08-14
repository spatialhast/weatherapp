import { Injectable } from '@angular/core'

@Injectable()

export class WeatherService {
      get baseRequestUrl() {
        return 'http://api.openweathermap.org/data/2.5/weather';
      }
    
      get appid() {
        return '6159c6ae97924d4e4ab84d690ccdee43';
      }
    
      getIconUrl(iconCode) {
        return 'http://openweathermap.org/img/w/' + iconCode + '.png';
      }
    
      getWeather(cityName) {
        let requestUrl = `${this.baseRequestUrl}?q=${cityName}us&units=metric&mode=json&APPID=${this.appid}`;
        return fetch(requestUrl)
          .then(response => response.json())
          .then(data => {
            let { temp, humidity, pressure } = data.main;
            let iconUrl = this.getIconUrl(data.weather[0].icon);
            let windSpeed = data.wind.speed;
            return {
              iconUrl,
              temp,
              humidity,
              pressure,
              windSpeed
            }
          })
          .catch(error => console.log(error));
      }
}