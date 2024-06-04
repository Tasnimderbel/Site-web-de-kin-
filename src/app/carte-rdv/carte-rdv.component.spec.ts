import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRDVComponent } from './carte-rdv.component';

describe('CarteRDVComponent', () => {
  let component: CarteRDVComponent;
  let fixture: ComponentFixture<CarteRDVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteRDVComponent]
    });
    fixture = TestBed.createComponent(CarteRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
