import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayerFormLoneComponent } from './create-player-form-lone.component';

describe('CreatePlayerFormLoneComponent', () => {
  let component: CreatePlayerFormLoneComponent;
  let fixture: ComponentFixture<CreatePlayerFormLoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreatePlayerFormLoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlayerFormLoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
