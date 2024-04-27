import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEEKLYComponent } from './weekly.component';

describe('WEEKLYComponent', () => {
  let component: WEEKLYComponent;
  let fixture: ComponentFixture<WEEKLYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WEEKLYComponent]
    });
    fixture = TestBed.createComponent(WEEKLYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
