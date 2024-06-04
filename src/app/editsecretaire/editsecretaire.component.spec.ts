import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsecretaireComponent } from './editsecretaire.component';

describe('EditsecretaireComponent', () => {
  let component: EditsecretaireComponent;
  let fixture: ComponentFixture<EditsecretaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsecretaireComponent]
    });
    fixture = TestBed.createComponent(EditsecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
