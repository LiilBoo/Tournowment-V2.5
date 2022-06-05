import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormatFormComponent } from './create-format-form.component';

describe('CreateFormatFormComponent', () => {
  let component: CreateFormatFormComponent;
  let fixture: ComponentFixture<CreateFormatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreateFormatFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
