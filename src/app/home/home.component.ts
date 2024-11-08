import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantDetails } from '../models/restaurant-details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedRestaurant: RestaurantDetails;
  restaurantList: RestaurantDetails[] = [];
  constructor(private restaurantService: RestaurantService) {
    this.restaurantList = this.restaurantService.getRestaurantList();
    this.selectedRestaurant = this.restaurantList[1];
  }
}
