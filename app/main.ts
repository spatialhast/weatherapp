import { bootstrap } from '@angular/platform-browser-dynamic'
import { AppComponent } from './appComponent/app.component'
import { appRouterProviders } from './appRoutes/appRoutes'


bootstrap(AppComponent, [
   appRouterProviders
])

