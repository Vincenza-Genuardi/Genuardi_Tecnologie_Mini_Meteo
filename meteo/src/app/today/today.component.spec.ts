import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TODAYComponent } from './today.component';

describe('TODAYComponent', () => {
  let component: TODAYComponent;
  let fixture: ComponentFixture<TODAYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TODAYComponent]
    });
    fixture = TestBed.createComponent(TODAYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
