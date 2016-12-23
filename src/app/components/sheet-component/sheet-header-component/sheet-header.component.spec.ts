/* tslint:disable:no-unused-variable */
import {SheetHeaderComponent} from './sheet-header.component';
import {PortraitComponent} from './portrait-component/portrait.component';
import {IdentityComponent} from './identity-component/identity.component';
import {PlayerInformationComponent} from './player-information-component/player-information.component';
import {DescriptionComponent} from './description-component/description.component';
import {PointsComponent} from './points-component/points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

////////  SPECS  /////////////
describe('SheetHeaderComponent', function () {
    let de: DebugElement;
    let comp: SheetHeaderComponent;
    let fixture: ComponentFixture<SheetHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SheetHeaderComponent,
                PortraitComponent,
                IdentityComponent,
                PlayerInformationComponent,
                DescriptionComponent,
                PointsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SheetHeaderComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create Sheet Header Component', () => expect(comp).toBeDefined());
});


