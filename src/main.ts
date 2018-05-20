import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import fontawesome from '@fortawesome/fontawesome';
import {
  faEnvelope, faCircle, faUser, faSort, faDollarSign, faFire, faStar, faRuler, faPhone,
} from '@fortawesome/fontawesome-free-solid';
import * as faRegularStar from '@fortawesome/fontawesome-free-regular/faStar';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
// add here needed icons
fontawesome.library.add(
  faUser, faCircle, faSort, faDollarSign, faFire, faStar, faRuler, faEnvelope, faPhone, faRegularStar, faHeart,
);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
