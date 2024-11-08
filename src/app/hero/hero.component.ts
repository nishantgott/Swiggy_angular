import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  searchQuery: string = '';

  constructor(private router: Router) { }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search', this.searchQuery]);
    }
  }
}
