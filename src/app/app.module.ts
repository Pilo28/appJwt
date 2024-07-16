import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  
    JwtModule.forRoot({
      config: {
        tokenGetter: () => sessionStorage.getItem('token'),
        allowedDomains: ['localhost:49220'],
        disallowedRoutes: ['localhost:49220/api/login/authenticate']
      }
    })
  ],
  providers: [
    JwtHelperService,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
