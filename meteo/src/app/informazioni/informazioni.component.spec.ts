import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INFORMAZIONIComponent } from './informazioni.component';

describe('INFORMAZIONIComponent', () => {
  let component: INFORMAZIONIComponent;
  let fixture: ComponentFixture<INFORMAZIONIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [INFORMAZIONIComponent]
    });
    fixture = TestBed.createComponent(INFORMAZIONIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
