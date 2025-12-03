import { Routes } from '@angular/router';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';

export const routes: Routes = [
  { path: '', component: AboutMe },
  { path: 'about', component: AboutMe },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience }
];