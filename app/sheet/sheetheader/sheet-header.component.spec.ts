/* tslint:disable:no-unused-variable */
import { SheetHeaderComponent } from './sheet-header.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('SheetHeaderComponent', function () {
    let de: DebugElement;
    let comp: SheetHeaderComponent;
    let fixture: ComponentFixture<SheetHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SheetHeaderComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SheetHeaderComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create SheetHeader component', () => expect(comp).toBeDefined() );
});


