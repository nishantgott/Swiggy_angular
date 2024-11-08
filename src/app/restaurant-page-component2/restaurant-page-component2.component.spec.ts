import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPageComponent2Component } from './restaurant-page-component2.component';

describe('RestaurantPageComponent2Component', () => {
  let component: RestaurantPageComponent2Component;
  let fixture: ComponentFixture<RestaurantPageComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantPageComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantPageComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
