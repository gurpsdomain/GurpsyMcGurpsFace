import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {GurpsFEComponent}  from './app.component';
import {SheetComponent} from './sheet/sheet.component';
import {SheetHeaderComponent} from './sheet/sheetheader/sheet-header.component';
import {PortraitComponent} from './sheet/sheetheader/components/portrait.component';
import {PlayerInformationComponent} from './sheet/sheetheader/components/player-information.component';
import {DescriptionComponent} from './sheet/sheetheader/components/description.component';
import {PointsComponent} from './sheet/sheetheader/components/points.component';
import {IdentityComponent} from './sheet/sheetheader/components/identity.component';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
    ],
    declarations: [GurpsFEComponent,
        SheetComponent,
        SheetHeaderComponent,
        PortraitComponent,
        PlayerInformationComponent,
        DescriptionComponent,
        PointsComponent,
        IdentityComponent],
    bootstrap: [GurpsFEComponent]
})
export class AppModule {
}
