/* tslint:disable:no-unused-variable */
import { GurpsFEComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('GurpsFEComponent', function () {
  let de: DebugElement;
  let comp: GurpsFEComponent;
  let fixture: ComponentFixture<GurpsFEComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
      declarations: [ GurpsFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurpsFEComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );
});
