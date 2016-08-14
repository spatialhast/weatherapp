"use strict";
var router_1 = require('@angular/router');
var enterCity_component_1 = require('../enterCity/enterCity.component');
var weather_component_1 = require('../weatherForCity/weather.component');
var routes = [
    {
        path: '',
        redirectTo: '/enterCity',
        pathMatch: 'full'
    },
    {
        path: 'enterCity',
        component: enterCity_component_1.EnterCityComponent
    },
    {
        path: 'forecast/:city',
        component: weather_component_1.WeatherForCityComponent
    }
];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=appRoutes.js.map