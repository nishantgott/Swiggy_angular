import { Component, Input } from '@angular/core';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { ProductsService } from '../services/products.service';
import { ProductDetails } from '../models/product-details.model';
import { CartDetails } from '../models/cart-details.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent {
  @Input() restaurantInput!: RestaurantDetails;
  restaurantList: RestaurantDetails[] = [];
  productList: ProductDetails[] = [];
  selectedRestaurant: RestaurantDetails | undefined;
  cart: CartDetails[] = [];
  showPopUp: boolean = false;
  productToAdd!: ProductDetails;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    if (this.restaurantInput) {
      this.productList = this.productsService.getProductByRestaurant(this.restaurantInput.name);
    }
  }

  addToCart(product: ProductDetails): void {
    this.productToAdd = product;
    if (this.cartService.hasDifferentRestaurant(product.restaurant)) {
      this.showPopUp = true;
      return;
    }
    this.cartService.addToCart(product);
    this.cart = this.cartService.getCartItems();
    console.log('Cart after adding:', this.cart);
  }

  isProductInCart(product: ProductDetails): boolean {
    return this.cart.some(cartItem => cartItem.product.name === product.name);
  }

  yesStartAfresh(): void {
    this.cartService.clearCart();
    if (this.productToAdd) {
      this.cartService.addToCart(this.productToAdd);
    }
    this.showPopUp = false;
  }

  noCancel(): void {
    this.showPopUp = false;
  }
}
