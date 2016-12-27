import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {GurpsyComponent} from './gurpsy.component';
import {SheetComponent} from './components/sheet-component/sheet.component';
import {SheetHeaderComponent} from './components/sheet-component/sheet-header-component/sheet-header.component';
import {PortraitComponent} from './components/sheet-component/sheet-header-component/portrait-component/portrait.component';
// tslint:disable-next-line max-line-length
import {PlayerInformationComponent} from './components/sheet-component/sheet-header-component/player-information-component/player-information.component';
import {DescriptionComponent} from './components/sheet-component/sheet-header-component/description-component/description.component';
import {PointsComponent} from './components/sheet-component/sheet-header-component/points-component/points.component';
import {IdentityComponent} from './components/sheet-component/sheet-header-component/identity-component/identity.component';
import {HeaderComponent} from './components/header-component/header.component';
import {SideNavigationComponent} from './components/side-navigation/side-navigation.component';

@NgModule({
    declarations: [
        GurpsyComponent,
        SheetComponent,
        SheetHeaderComponent,
        PortraitComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        IdentityComponent,
        HeaderComponent,
        SideNavigationComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        TranslateModule.forRoot()
    ],
  providers: [],
    bootstrap: [GurpsyComponent]
})
export class AppModule {
}
