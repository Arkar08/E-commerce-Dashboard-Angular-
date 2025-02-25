import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModelAdComponent } from './edit-model-ad.component';

describe('EditModelAdComponent', () => {
  let component: EditModelAdComponent;
  let fixture: ComponentFixture<EditModelAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModelAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModelAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
