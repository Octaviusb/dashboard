import { Routes } from '@angular/router';

export const routes: Routes = [

{
  path: 'dashboard',
  loadComponent:() => import('./dashboard/dashboard.component'),
  children: [
    {
      path: 'change-detection',
      title: 'change Detection',
      loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
    },
    {
      path: 'control-flow',
      title: 'control Flow',
      loadComponent: () => import('./dashboard/pages/control-flow.component'),
    },
    {
      path: 'defer-options',
      title: 'defer Options',
      loadComponent: () => import('./dashboard/pages/defer-options.component'),
    },
    {
      path: 'defer-views',
      title: 'defer Views',
      loadComponent: () => import('./dashboard/pages/defer-views.component'),
    },
    {
      path: 'user/:id',
      title: 'user view',
      loadComponent: () => import('./dashboard/pages/user.component'),
    },
    {
      path: 'user-list',
      title: 'user List',
      loadComponent: () => import('./dashboard/pages/user.component'),
    },
    {
      path: 'view-transition',
      title: 'view Transition',
      loadComponent: () => import('./dashboard/pages/view-transition.component'),
    },

  ]
},
{
  path:'',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}

];
