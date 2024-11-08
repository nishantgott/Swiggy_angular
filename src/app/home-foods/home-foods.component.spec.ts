import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFoodsComponent } from './home-foods.component';

describe('HomeFoodsComponent', () => {
  let component: HomeFoodsComponent;
  let fixture: ComponentFixture<HomeFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFoodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
