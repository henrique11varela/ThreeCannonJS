import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'first',
  //   component: FirstComponent,
  // },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'first',
        component: FirstComponent
      }
    ]
  }
];
