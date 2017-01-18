/* tslint:disable:no-unused-variable */
import {IdentityComponent} from './identity.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';

describe('IdentityComponent', function () {
    let de: DebugElement;
    let comp: IdentityComponent;
    let fixture: ComponentFixture<IdentityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IdentityComponent],
            imports: [TranslateModule.forRoot()]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IdentityComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create Identity component', () => expect(comp).toBeDefined());
});