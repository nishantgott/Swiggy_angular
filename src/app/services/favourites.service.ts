import { Injectable } from '@angular/core';
import { RestaurantDetails } from '../models/restaurant-details.model';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  restaurantList: RestaurantDetails[] = [

  ];

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedRestaurants = localStorage.getItem('favouriteRestaurants');
      if (storedRestaurants) {
        this.restaurantList = JSON.parse(storedRestaurants);
      }
    }
  }

  getRestaurantList(): RestaurantDetails[] {
    return this.restaurantList;
  }

  addRestaurantToFavourites(restaurant: RestaurantDetails): void {
    if (!this.restaurantList.some(item => item.name === restaurant.name)) {
      this.restaurantList.push(restaurant);
      this.updateLocalStorage();
    }
  }

  isRestaurantInFavourites(restaurantName: string): boolean {
    return this.restaurantList.some(item => item.name === restaurantName);
  }

  removeRestaurantFromFavourites(restaurantName: string): void {
    this.restaurantList = this.restaurantList.filter(item => item.name !== restaurantName);
    this.updateLocalStorage();
  }

  private updateLocalStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('favouriteRestaurants', JSON.stringify(this.restaurantList));
    }
  }
}
