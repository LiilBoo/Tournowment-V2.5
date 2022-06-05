import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTourFormLoneComponent } from './update-tour-form-lone.component';

describe('UpdateTourFormLoneComponent', () => {
  let component: UpdateTourFormLoneComponent;
  let fixture: ComponentFixture<UpdateTourFormLoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UpdateTourFormLoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTourFormLoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
