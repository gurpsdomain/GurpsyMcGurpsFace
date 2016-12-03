import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {SheetComponent} from "./sheet-component/sheet.component";
import {SheetHeaderComponent} from "./sheet-component/sheet-header-component/sheet-header.component";
import {PortraitComponent} from "./sheet-component/sheet-header-component/portrait-component/portrait.component";
import {PlayerInformationComponent} from "./sheet-component/sheet-header-component/player-information-component/player-information.component";
import {DescriptionComponent} from "./sheet-component/sheet-header-component/description-component/description.component";
import {PointsComponent} from "./sheet-component/sheet-header-component/points-component/points.component";
import {IdentityComponent} from "./sheet-component/sheet-header-component/identity-component/identity.component";

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    SheetHeaderComponent,
    PortraitComponent,
    PlayerInformationComponent,
    DescriptionComponent,
    PointsComponent,
    IdentityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
