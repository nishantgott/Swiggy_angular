import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  @Output() closeSignup = new EventEmitter<void>();
  @Output() toggleLogin = new EventEmitter<void>();

  username: string = '';
  password: string = '';
  address: string = '';

  constructor(private authService: AuthService, public router: Router, private http: HttpClient) { }

  onSubmit(): void {

    if (!this.username || !this.password || !this.address) {
      return;
    }

    const user = {
      username: this.username,
      password: this.password,
      address: this.address
    };

    const mockApiUrl = 'https://672d4439fd8979715641eb22.mockapi.io/users';

    this.http.post(mockApiUrl, user).subscribe(
      (response) => {
        console.log('User created:', response);
        this.clearForm();
        this.close();
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  close(): void {
    this.closeSignup.emit();
  }

  clearForm(): void {
    this.username = '';
    this.password = '';
    this.address = '';
  }

}
