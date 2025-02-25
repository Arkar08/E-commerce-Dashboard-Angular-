import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModelAdComponent } from './delete-model-ad.component';

describe('DeleteModelAdComponent', () => {
  let component: DeleteModelAdComponent;
  let fixture: ComponentFixture<DeleteModelAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteModelAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteModelAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
