import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {path: 'admin', component: AdminPageComponent },
      {path: 'customers', component: CustomersPageComponent},
      {path: '**', redirectTo: 'home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
