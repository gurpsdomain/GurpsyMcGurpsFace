/* tslint:disable:no-unused-variable */
import {TestBed, async} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {SheetComponent} from './components/sheet-component/sheet.component';
import {SheetHeaderComponent} from './components/sheet-component/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './components/sheet-component/sheet-header-component/portrait-component/portrait.component';
import {IdentityComponent} from './components/sheet-component/sheet-header-component/identity-component/identity.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet-component/sheet-header-component/player-information-component/player-information.component';
import {DescriptionComponent} from './components/sheet-component/sheet-header-component/description-component/description.component';
import {PointsComponent} from './components/sheet-component/sheet-header-component/points-component/points.component';
import {HeaderComponent} from './components/header-component/header.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';


describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SheetComponent,
                SheetHeaderComponent,
                PortraitComponent,
                IdentityComponent,
                PlayerInformationComponent,
                DescriptionComponent,
                PointsComponent,
                HeaderComponent,
                SideNavigationComponent
            ],
            imports: [
                FormsModule,
                MaterialModule.forRoot(),
                TranslateModule.forRoot()
            ]

        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
