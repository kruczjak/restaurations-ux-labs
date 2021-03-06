import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { IconComponent } from './icon/icon.component';
import { RestaurantElementComponent } from './restaurant-element/restaurant-element.component';
import { FoodElementComponent } from './food-element/food-element.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RestaurantPageComponent,
    IconComponent,
    RestaurantElementComponent,
    FoodElementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
