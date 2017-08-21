import { Routes, RouterModule } from '@angular/router';

import { SimpleWizardComponent }  from './simple-wizard/simple-wizard.component';

const appRoutes: Routes = [
  	{
  		path: '',
  		redirectTo: "/wizard",
  		pathMatch:"full"
    },{
      path: 'wizard',
      component: SimpleWizardComponent
    }
];

export const Routing = RouterModule.forRoot(appRoutes);