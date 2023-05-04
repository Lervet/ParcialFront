import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formClientesComponent } from './formClientes.component';

describe('FormClientesComponent', () => {
  let component: formClientesComponent;
  let fixture: ComponentFixture<formClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ formClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(formClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
