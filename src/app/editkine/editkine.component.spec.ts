import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkineComponent } from './editkine.component';

describe('EditkineComponent', () => {
  let component: EditkineComponent;
  let fixture: ComponentFixture<EditkineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditkineComponent]
    });
    fixture = TestBed.createComponent(EditkineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
