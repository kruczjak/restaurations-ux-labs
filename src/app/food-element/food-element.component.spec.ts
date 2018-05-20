import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodElementComponent } from './food-element.component';

describe('FoodElementComponent', () => {
  let component: FoodElementComponent;
  let fixture: ComponentFixture<FoodElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
