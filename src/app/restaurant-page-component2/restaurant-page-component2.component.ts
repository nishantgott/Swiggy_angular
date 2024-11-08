import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-page-component2',
  templateUrl: './restaurant-page-component2.component.html',
  styleUrls: ['./restaurant-page-component2.component.css']
})
export class RestaurantPageComponent2Component implements OnInit {
  restaurantList: RestaurantDetails[] = [];
  ress!: RestaurantDetails;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const restaurantInput = this.route.snapshot.paramMap.get('restaurantInput')?.toLowerCase();

    this.restaurantList = this.restaurantService.getRestaurantList();

    if (restaurantInput) {
      this.ress = this.restaurantList.find(r => r.name.toLowerCase() === restaurantInput)!;
    }
  }
}
