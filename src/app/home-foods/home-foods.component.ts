import { Component, ElementRef, ViewChild } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { FoodTypesService } from '../services/food-types.service';

@Component({
  selector: 'app-home-foods',
  templateUrl: './home-foods.component.html',
  styleUrls: ['./home-foods.component.css']
})
export class HomeFoodsComponent {
  restaurantList: RestaurantDetails[] = [];
  restaurant1!: RestaurantDetails;
  foodTypes: { img: string, goto: string }[] = [];

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  constructor(
    private restaurantService: RestaurantService,
    private foodTypesService: FoodTypesService
  ) {
    this.restaurantList = this.restaurantService.getRestaurantList();
    if (this.restaurantList.length > 1) {
      this.restaurant1 = this.restaurantList[1];
    }
    this.foodTypes = this.foodTypesService.getAllFoodTypes();
  }

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
}
