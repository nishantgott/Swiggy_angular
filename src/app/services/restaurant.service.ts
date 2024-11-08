import { Injectable } from '@angular/core';
import { RestaurantDetails } from '../models/restaurant-details.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  protected restaurantList: RestaurantDetails[] =
    [
      {
        name: "Burger King",
        cuisine: "American",
        location: "Attapur",
        rating: 4.1,
        price: '₹250 for two',
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG"
      },
      {
        name: "Pizza Hut",
        cuisine: "Italian",
        location: "Tolichowki",
        rating: 3.9,
        price: '₹350 for two',
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg"
      },
      {
        name: "New Paradise",
        cuisine: "Masab Tank",
        location: "Pune",
        rating: 4.6,
        price: '₹300 for two',
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/28/da830fef-b66c-48ed-a93c-a73df72768c1_877613.JPG"
      },
      {
        name: "Street Wok Chinese",
        cuisine: "Chinese",
        location: "Manikonda",
        rating: 4.8,
        price: '₹240 for two',
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/6dbcfb19-9fb3-47cb-9fc0-ffccc08949be_793838.jpg"
      },
      {
        name: "New Chotus Tiffins",
        cuisine: "South Indian",
        location: "Charminar",
        rating: 4.2,
        price: '₹200 for two',
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f1bc9ddf53de574cdc35ab2f717df234"
      },
      {
        name: "Cream Stone",
        cuisine: "Desserts",
        location: "KPHB Colony",
        rating: 4.4,
        price: '₹400 for two',
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/a69a9535-61e6-4a19-84cd-c739be6be8a3_490822.jpg"
      },
    ];
  constructor() {
  }
  getRestaurantList(): RestaurantDetails[] {
    return this.restaurantList;
  }

  searchRestaurantsByName(name: string): RestaurantDetails[] {
    return this.restaurantList.filter(restaurant =>
      restaurant.name.toLowerCase().includes(name.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(name.toLowerCase())
    );
  }
}
