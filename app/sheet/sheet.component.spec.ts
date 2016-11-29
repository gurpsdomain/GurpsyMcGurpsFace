/* tslint:disable:no-unused-variable */
import { SheetComponent } from './sheet.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('SheetComponent', function () {
    let de: DebugElement;
    let comp: SheetComponent;
    let fixture: ComponentFixture<SheetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SheetComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SheetComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create a Sheet component', () => expect(comp).toBeDefined() );
});


