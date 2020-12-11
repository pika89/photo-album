import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {fakeBackendProvider, JwtInterceptor} from './helpers';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {StoreModule} from '@ngrx/store';
import {environment} from 'src/environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {routerReducer} from '@ngrx/router-store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {CommonModule} from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)

    StoreModule.forRoot(
      {
        router: routerReducer
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
};
