import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPlayComponent } from './first-play/first-play.component';
import { SecondPlayComponent } from './second-play/second-play.component';
import { ThirdPlayComponent } from './third-play/third-play.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FirstPlayComponent
  },
  {
    path: 'plays/:id',
    component: SecondPlayComponent
  },
  {
    path: 'second-play/:id',
    component: ThirdPlayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
