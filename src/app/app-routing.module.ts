import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './core/auth/guards/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [loginGuard],
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'home', 
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
