import { Component, Input } from '@angular/core';
import { ProductDetails } from '../models/product-details.model';
import { CartService } from '../services/cart.service';
import { CartDetails } from '../models/cart-details.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: ProductDetails;
  cart: CartDetails[] = [];
  showPopUp: boolean = false;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCartItems();
  }

  addToCart(product: ProductDetails): void {
    if (this.cartService.hasDifferentRestaurant(product.restaurant)) {
      this.showPopUp = true;
      return;
    }
    this.cartService.addToCart(product);
    this.cart = this.cartService.getCartItems();
    console.log('added to cart');
  }

  isProductInCart(product: ProductDetails): boolean {
    return this.cart.some(cartItem => cartItem.product.name === product.name);
  }

  yesStartAfresh(): void {
    this.cartService.clearCart();
    this.cartService.addToCart(this.product);
    this.showPopUp = false;
    this.cart = this.cartService.getCartItems();
  }

  noCancel(): void {
    this.showPopUp = false;
  }
}
