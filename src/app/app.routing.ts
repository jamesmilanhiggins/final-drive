import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPlayComponent } from './first-play/first-play.component';
import { SecondPlayComponent } from './second-play/second-play.component';
import { ThirdPlayComponent } from './third-play/third-play.component';
import { FourthPlayComponent } from './fourth-play/fourth-play.component';
import { GameOverComponent } from './game-over/game-over.component';

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
  },
  {
    path: 'third-play/:id',
    component: FourthPlayComponent
  },
  {
    path: 'game-over/:id',
    component: GameOverComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
