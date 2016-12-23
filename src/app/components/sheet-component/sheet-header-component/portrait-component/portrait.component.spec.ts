/* tslint:disable:no-unused-variable */
import {PortraitComponent} from './portrait.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

////////  SPECS  /////////////
describe('PortraitComponent', function () {
    let de: DebugElement;
    let comp: PortraitComponent;
    let fixture: ComponentFixture<PortraitComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PortraitComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortraitComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create Portrait component', () => expect(comp).toBeDefined());
});
