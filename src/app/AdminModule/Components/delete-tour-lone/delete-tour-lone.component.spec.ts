import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTourLoneComponent } from './delete-tour-lone.component';

describe('DeleteTourLoneComponent', () => {
  let component: DeleteTourLoneComponent;
  let fixture: ComponentFixture<DeleteTourLoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DeleteTourLoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTourLoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
