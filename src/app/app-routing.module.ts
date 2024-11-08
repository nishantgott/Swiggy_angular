import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { RestaurantPageComponent2Component } from './restaurant-page-component2/restaurant-page-component2.component';
import { SignupComponent } from './signup/signup.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'restaurant/:restaurantInput', component: RestaurantPageComponent2Component },
  { path: 'favourites', component: FavouritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
