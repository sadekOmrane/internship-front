import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AuthInterceptorProvider } from './shared/providers/security/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewsModule,
    SharedModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    NgbModule,
    AppRoutes,
  ],
  providers: [
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
