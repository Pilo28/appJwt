import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomersPageComponent } from './pages/customers-page/customers-page.component';
import { AdminDetailComponent } from './pages/admin-detail/admin-detail.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AdminPageComponent,
    CustomersPageComponent,
    AdminDetailComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
