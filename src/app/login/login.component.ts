import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() closeLogin = new EventEmitter<void>();
  @Output() toggleSignup = new EventEmitter<void>();

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, public router: Router) { }

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(isAuthenticated => {
      console.log(this.username, this.password, isAuthenticated);
      if (isAuthenticated) {
        this.close();
        this.router.navigate(['/']);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

  funToSignup(): void {
    console.log('funToSignup called');
    // this.closeLogin.emit();
    this.toggleSignup.emit();
  }

  close(): void {
    this.closeLogin.emit();
  }
}
