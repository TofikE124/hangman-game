import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { RulesComponent } from './components/rules/rules.component';
import { InGameComponent } from './components/in-game/in-game.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'play/:category', component: InGameComponent },
];
