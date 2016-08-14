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
var EnterCityComponent = (function () {
    function EnterCityComponent(router) {
        this.router = router;
    }
    EnterCityComponent.prototype.handler = function (cityName) {
        this.router.navigate(['/forecast', cityName ? cityName : 'Kharkov']);
    };
    EnterCityComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/enterCity/enterCity.component.html',
            styleUrls: ['app/enterCity/enterCity.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], EnterCityComponent);
    return EnterCityComponent;
}());
exports.EnterCityComponent = EnterCityComponent;
//# sourceMappingURL=enterCity.component.js.map