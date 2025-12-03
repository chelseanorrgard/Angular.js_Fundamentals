import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor';
import { RickMorty } from './rick-morty/rick-morty';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'calculator', component: Calculator },
  { path: 'text-editor', component: TextEditor },
  { path: 'rick-morty', component: RickMorty }
];