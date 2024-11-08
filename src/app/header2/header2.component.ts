import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {
  @Output() toggleLogin = new EventEmitter<void>();
  cartCount: number = 0;
  username: string | null = null;
  address: string | null = null;
  showDropdown: boolean = false;
  showMobileMenu: boolean = false;
  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated());
    this.cartCount = this.cartService.getCartCount();
    this.cartService.getCartItemsObservable().subscribe(cart => {
      this.cartCount = cart.length;
    });
  }

  doToggleLogin(): void {
    console.log('button clicked');
    console.log(this.isLoggedIn())
    this.toggleLogin.emit();
  }

  logout(): void {
    this.username = null;
    this.authService.logout();
    this.showDropdown = false;
    window.location.reload();
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  isLoggedIn(): boolean {
    if (this.authService.isAuthenticated()) {
      this.username = this.authService.getUsername();
      this.address = this.authService.getAddress();
      return true;
    }
    return false;
  }
}
