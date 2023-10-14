import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeartherCardComponent } from './wearther-card.component';

describe('WeartherCardComponent', () => {
  let component: WeartherCardComponent;
  let fixture: ComponentFixture<WeartherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeartherCardComponent]
    });
    fixture = TestBed.createComponent(WeartherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
