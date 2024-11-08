import { Injectable } from '@angular/core';
import { ProductDetails } from '../models/product-details.model';
import { CartDetails } from '../models/cart-details.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartDetails[] = this.getCartFromLocalStorage();
  private cartSubject = new BehaviorSubject<CartDetails[]>(this.cart);

  constructor() { }

  getCartItemsObservable(): Observable<CartDetails[]> {
    return this.cartSubject.asObservable();
  }

  getCartItems(): CartDetails[] {
    return this.cart;
  }

  addToCart(product: ProductDetails): void {
    const existingItem = this.cart.find(item => item.product.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ product: product, quantity: 1 });
    }
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
  }

  removeFromCart(product: ProductDetails): void {
    const itemIndex = this.cart.findIndex(item => item.product.name === product.name);
    if (itemIndex > -1) {
      this.cart[itemIndex].quantity--;
      if (this.cart[itemIndex].quantity === 0) {
        this.cart.splice(itemIndex, 1);
      }
    }
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
  }

  hasDifferentRestaurant(currentRestaurant: string): boolean {
    if (this.cart.length > 0) {
      return this.cart[0].product.restaurant !== currentRestaurant;
    }
    return false;
  }


  clearCart(): void {
    this.cart = [];
    this.updateLocalStorage();
    this.cartSubject.next(this.cart);
  }

  getCartCount(): number {
    // return this.cart.reduce((total, item) => total + item.quantity, 0);
    return this.cart.length;
  }


  private updateLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }


  private getCartFromLocalStorage(): CartDetails[] {
    if (this.isLocalStorageAvailable()) {
      const cartData = localStorage.getItem('cart');
      return cartData ? JSON.parse(cartData) : [];
    }
    return [];
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}
