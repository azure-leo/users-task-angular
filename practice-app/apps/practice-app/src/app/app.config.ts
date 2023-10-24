import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { API_URL } from '@users/core/http';
import { environment } from '../environments/environment.development';
import {provideEffects} from "@ngrx/effects";
import {provideState, provideStore} from "@ngrx/store";
import {USERS_FEATURE_KEY, usersReducer, userEffects, UsersFacade} from "@users/data-access";



export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(userEffects),
    provideState(USERS_FEATURE_KEY, usersReducer),
    provideEffects(),
    provideStore(),
    UsersFacade,
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(HttpClientModule),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
  ],
};
