import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBannerComponent } from './download-banner.component';

describe('DownloadBannerComponent', () => {
  let component: DownloadBannerComponent;
  let fixture: ComponentFixture<DownloadBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
