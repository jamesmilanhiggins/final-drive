import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPlayComponent } from './first-play/first-play.component';
import { SecondPlayComponent } from './second-play/second-play.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FirstPlayComponent
  },
  {
    path:'second-play',
    component: SecondPlayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
