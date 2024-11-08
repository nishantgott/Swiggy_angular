import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swiggy-angular';
  showLogin: boolean = false;
  showSignup: boolean = false;

  toggleLogin(): void {
    this.showLogin = !this.showLogin;
    this.showSignup = false;
  }

  closeLogin(): void {
    this.showLogin = false;
  }

  toggleSignup(): void {
    this.showSignup = !this.showSignup;
    this.showLogin = false;
  }

  closeSignup(): void {
    this.showSignup = false;
  }
}
