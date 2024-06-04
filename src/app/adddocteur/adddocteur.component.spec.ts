import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddocteurComponent } from './adddocteur.component';

describe('AdddocteurComponent', () => {
  let component: AdddocteurComponent;
  let fixture: ComponentFixture<AdddocteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddocteurComponent]
    });
    fixture = TestBed.createComponent(AdddocteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
