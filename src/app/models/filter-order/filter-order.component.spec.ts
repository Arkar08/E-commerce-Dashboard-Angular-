import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOrderComponent } from './filter-order.component';

describe('FilterOrderComponent', () => {
  let component: FilterOrderComponent;
  let fixture: ComponentFixture<FilterOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
