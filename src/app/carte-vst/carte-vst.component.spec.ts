import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVSTComponent } from './carte-vst.component';

describe('CarteVSTComponent', () => {
  let component: CarteVSTComponent;
  let fixture: ComponentFixture<CarteVSTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteVSTComponent]
    });
    fixture = TestBed.createComponent(CarteVSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
