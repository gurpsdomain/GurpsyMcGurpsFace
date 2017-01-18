/* tslint:disable:no-unused-variable */
import {PointsComponent} from './points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';

////////  SPECS  /////////////
describe('PointsComponent', function () {
    let de: DebugElement;
    let comp: PointsComponent;
    let fixture: ComponentFixture<PointsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PointsComponent],
            imports: [TranslateModule.forRoot()]
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