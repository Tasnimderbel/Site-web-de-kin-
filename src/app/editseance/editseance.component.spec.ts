import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditseanceComponent } from './editseance.component';

describe('EditseanceComponent', () => {
  let component: EditseanceComponent;
  let fixture: ComponentFixture<EditseanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditseanceComponent]
    });
    fixture = TestBed.createComponent(EditseanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
