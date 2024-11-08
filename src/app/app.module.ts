import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { HeroComponent } from './hero/hero.component';
import { DownloadBannerComponent } from './download-banner/download-banner.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { HomeRestaurantComponent } from './home-restaurant/home-restaurant.component';
import { SearchComponent } from './search/search.component';
import { HomeFoodsComponent } from './home-foods/home-foods.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { RestaurantPageComponent2Component } from './restaurant-page-component2/restaurant-page-component2.component';
import { LoginComponent } from './login/login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component,
    HeroComponent,
    DownloadBannerComponent,
    RestaurantCardComponent,
    HomeRestaurantComponent,
    SearchComponent,
    HomeFoodsComponent,
    ProductCardComponent,
    CartComponent,
    RestaurantPageComponent,
    RestaurantPageComponent2Component,
    LoginComponent,
    SignupComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
