import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFarmaciasComponent } from './formFarmacias.component';

describe('FormFarmaciasComponent', () => {
  let component: FormFarmaciasComponent;
  let fixture: ComponentFixture<FormFarmaciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFarmaciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFarmaciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
