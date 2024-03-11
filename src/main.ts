/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AccountModule } from './accounts/account.module';
import { RootModule } from './root.module';


platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.error(err));
