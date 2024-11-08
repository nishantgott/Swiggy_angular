import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartDetails } from '../models/cart-details.model';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart_items: CartDetails[] = [];
  checkedBox: boolean = false;
  totalPrice: number = 0;
  gstTax: number = 0;
  restaurant_name: string = "";
  restaurantList: RestaurantDetails[] = [];
  restaurantImageUrl: string = "";

  constructor(private cartService: CartService, private RestaurantService: RestaurantService) {
    this.cartService.getCartItemsObservable().subscribe(cartItems => {
      this.cart_items = cartItems;
      this.updateTotalPrice();

      if (cartItems.length > 0) {
        this.restaurant_name = cartItems[0].product.restaurant;

        this.restaurantList = this.RestaurantService.getRestaurantList();
        this.restaurantList.forEach(r => {
          if (r.name === this.restaurant_name) {
            this.restaurantImageUrl = r.imageUrl;
          }
        });
      }
    });
  }

  checkBoxChange(): void {
    this.checkedBox = !this.checkedBox;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.updateTotalPrice();
  }

  increaseQuantity(item: CartDetails): void {
    this.cartService.addToCart(item.product);
    this.updateTotalPrice();
  }

  decreaseQuantity(item: CartDetails): void {
    this.cartService.removeFromCart(item.product);
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cart_items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    this.gstTax = this.totalPrice * 0.21;
  }
}
