import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
	selector: 'my-app',
    templateUrl : 'app/appComponent/app.component.html', 
    styleUrls: ['app/appComponent/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'Check the weather';
}