import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, 
    CoreRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule { }
