import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsecretaireComponent } from './addsecretaire.component';

describe('AddsecretaireComponent', () => {
  let component: AddsecretaireComponent;
  let fixture: ComponentFixture<AddsecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsecretaireComponent]
    });
    fixture = TestBed.createComponent(AddsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
