import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncumbranceComponent } from './encumbrance.component';

describe('EncumbranceComponent', () => {
  let component: EncumbranceComponent;
  let fixture: ComponentFixture<EncumbranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncumbranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncumbranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
