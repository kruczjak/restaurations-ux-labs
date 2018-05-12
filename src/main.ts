import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import fontawesome from '@fortawesome/fontawesome';
import { faCircle, faUser } from '@fortawesome/fontawesome-free-regular';

// add here needed icons
fontawesome.library.add(faUser, faCircle);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
