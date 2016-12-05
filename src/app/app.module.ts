import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {TranslateModule} from 'ng2-translate';
import {AppComponent} from "./app.component";
import {SheetComponent} from "./components/sheet-component/sheet.component";
import {SheetHeaderComponent} from "./components/sheet-component/sheet-header-component/sheet-header.component";
import {PortraitComponent} from "./components/sheet-component/sheet-header-component/portrait-component/portrait.component";
import {PlayerInformationComponent} from "./components/sheet-component/sheet-header-component/player-information-component/player-information.component";
import {DescriptionComponent} from "./components/sheet-component/sheet-header-component/description-component/description.component";
import {PointsComponent} from "./components/sheet-component/sheet-header-component/points-component/points.component";
import {IdentityComponent} from "./components/sheet-component/sheet-header-component/identity-component/identity.component";

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
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
