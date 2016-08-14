import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/enterCity/enterCity.component.html',
    styleUrls: ['app/enterCity/enterCity.component.css']
})

export class EnterCityComponent {
    cityName;

    constructor(private router: Router) { }

    handler(cityName) {
        this.router.navigate(['/forecast', cityName ? cityName : 'Kharkov']);
    }
}
