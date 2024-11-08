import { Component, Input } from '@angular/core';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent {
  @Input() restaurant!: RestaurantDetails;

  constructor(private favouritesService: FavouritesService) { }

  addToFavourites(event: Event, restaurant: RestaurantDetails): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.favouritesService.isRestaurantInFavourites(restaurant.name)) {
      this.favouritesService.removeRestaurantFromFavourites(restaurant.name);
      this.showSuccessAlert(`${restaurant.name} removed from favourites`);
    } else {
      this.favouritesService.addRestaurantToFavourites(restaurant);
      this.showSuccessAlert(`${restaurant.name} added to favourites`);
    }
  }


  showAlert: boolean = false;
  alertMessage: string = 'This is a success alert!';

  showSuccessAlert(message: string): void {
    this.alertMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
