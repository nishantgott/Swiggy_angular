import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantDetails } from '../models/restaurant-details.model';
import { RestaurantService } from '../services/restaurant.service';
import { ProductsService } from '../services/products.service';
import { ProductDetails } from '../models/product-details.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query!: string;
  restaurantList: RestaurantDetails[] = [];
  productList: ProductDetails[] = [];
  activeButton: string = 'dishes';
  searchQuery: string = '';

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      this.searchQuery = this.query;
      this.restaurantList = this.restaurantService.searchRestaurantsByName(this.query);
      this.productList = this.productsService.searchProductsByName(this.query);
    });
  }

  setActive(button: string): void {
    this.activeButton = button;
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/search', this.searchQuery]);
    }
  }
}
