import {Routes} from '@angular/router';
import {CompanyServiceComponent} from './company-service/company-service.component';
import {HomepageComponent} from './homepage/homepage.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'service',
    component: CompanyServiceComponent
  }
  // { path: '**',    component: _404PageComponent },
];
