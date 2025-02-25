import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelAdComponent } from './create-model-ad.component';

describe('CreateModelAdComponent', () => {
  let component: CreateModelAdComponent;
  let fixture: ComponentFixture<CreateModelAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModelAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateModelAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
