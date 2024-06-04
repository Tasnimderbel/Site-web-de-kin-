import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpatientComponent } from './modifierpatient.component';

describe('ModifierpatientComponent', () => {
  let component: ModifierpatientComponent;
  let fixture: ComponentFixture<ModifierpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierpatientComponent]
    });
    fixture = TestBed.createComponent(ModifierpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
