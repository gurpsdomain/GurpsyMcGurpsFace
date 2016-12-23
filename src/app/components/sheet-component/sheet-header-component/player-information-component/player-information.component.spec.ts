/* tslint:disable:no-unused-variable */
import {PlayerInformationComponent} from './player-information.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

////////  SPECS  /////////////
describe('PlayerInformationComponent', function () {
    let de: DebugElement;
    let comp: PlayerInformationComponent;
    let fixture: ComponentFixture<PlayerInformationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayerInformationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerInformationComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create Player Information component', () => expect(comp).toBeDefined());
});
