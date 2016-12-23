/* tslint:disable:no-unused-variable */
import {PointsComponent} from './points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

////////  SPECS  /////////////
describe('PointsComponent', function () {
    let de: DebugElement;
    let comp: PointsComponent;
    let fixture: ComponentFixture<PointsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PointsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PointsComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create Points component', () => expect(comp).toBeDefined());
});
