import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkineComponent } from './addkine.component';

describe('AddkineComponent', () => {
  let component: AddkineComponent;
  let fixture: ComponentFixture<AddkineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddkineComponent]
    });
    fixture = TestBed.createComponent(AddkineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
