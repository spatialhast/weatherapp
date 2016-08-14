import { provideRouter, RouterConfig } from '@angular/router';
import { EnterCityComponent } from '../enterCity/enterCity.component';
import { WeatherForCityComponent } from '../weatherForCity/weather.component';


 const routes: RouterConfig = [
     {
         path: '',
         redirectTo: '/enterCity',
         pathMatch: 'full'
     },
     {
         path: 'enterCity',
         component: EnterCityComponent
     },
     {
         path: 'forecast/:city',
         component: WeatherForCityComponent
     }
 ]

 export const appRouterProviders = [provideRouter(routes)]