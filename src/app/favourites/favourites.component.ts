import { Component } from '@angular/core';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {
  favouritesList: RestaurantDetails[] = [];

  constructor(private favouritesService: FavouritesService) {
    this.favouritesList = favouritesService.getRestaurantList();
  }
}
