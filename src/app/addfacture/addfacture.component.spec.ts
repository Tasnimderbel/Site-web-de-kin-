import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfactureComponent } from './addfacture.component';

describe('AddfactureComponent', () => {
  let component: AddfactureComponent;
  let fixture: ComponentFixture<AddfactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfactureComponent]
    });
    fixture = TestBed.createComponent(AddfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
