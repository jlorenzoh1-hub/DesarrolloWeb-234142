import { Routes } from '@angular/router';

export const routes: Routes = [
{
path: 'dashboard',
loadComponent: () =>
import('./MiSistema/pages/dashboard-page/Dashboard/Dashboard').then(
(m) => m.Dashboard,
),
},
{
path: '**',
redirectTo: 'dashboard',
},
];