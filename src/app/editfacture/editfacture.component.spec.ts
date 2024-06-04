import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfactureComponent } from './editfacture.component';

describe('EditfactureComponent', () => {
  let component: EditfactureComponent;
  let fixture: ComponentFixture<EditfactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfactureComponent]
    });
    fixture = TestBed.createComponent(EditfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
