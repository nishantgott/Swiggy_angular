import { Component, ElementRef, ViewChild } from '@angular/core';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrl: './home-restaurant.component.css',
})
export class HomeRestaurantComponent {
  restaurantList: RestaurantDetails[];
  restaurant1: RestaurantDetails;
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  constructor(private restaurantService: RestaurantService) {
    this.restaurantList = this.restaurantService.getRestaurantList();
    this.restaurant1 = this.restaurantList[1];
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
