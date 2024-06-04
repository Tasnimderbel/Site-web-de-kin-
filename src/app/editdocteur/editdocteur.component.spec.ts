import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdocteurComponent } from './editdocteur.component';

describe('EditdocteurComponent', () => {
  let component: EditdocteurComponent;
  let fixture: ComponentFixture<EditdocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdocteurComponent]
    });
    fixture = TestBed.createComponent(EditdocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
