import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconsultationComponent } from './editconsultation.component';

describe('EditconsultationComponent', () => {
  let component: EditconsultationComponent;
  let fixture: ComponentFixture<EditconsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditconsultationComponent]
    });
    fixture = TestBed.createComponent(EditconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
