import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'restaurant', component: RestaurantPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
