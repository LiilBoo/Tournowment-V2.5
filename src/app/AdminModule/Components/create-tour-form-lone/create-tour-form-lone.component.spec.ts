import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTourFormLoneComponent } from './create-tour-form-lone.component';

describe('CreateTourFormLoneComponent', () => {
  let component: CreateTourFormLoneComponent;
  let fixture: ComponentFixture<CreateTourFormLoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreateTourFormLoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTourFormLoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
