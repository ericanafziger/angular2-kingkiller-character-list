import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewCharacterComponent } from './new-character/new-character.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'new-character',
    component: NewCharacterComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
