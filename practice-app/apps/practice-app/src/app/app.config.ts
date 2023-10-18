import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {API_URL} from "@users/core/http";
import { environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(
      HttpClientModule
    ),
    {
      provide: API_URL,
      useValue: environment.api_url
    }
  ],
};
