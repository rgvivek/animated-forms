import { Routes, RouterModule } from '@angular/router';

import { SimpleFormComponent }  from './simple-form/simple-form.component';

const appRoutes: Routes = [
  	{
      path: 'simple-form',
      component: SimpleFormComponent
    }
];

export const Routing = RouterModule.forRoot(appRoutes);