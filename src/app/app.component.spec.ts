/* tslint:disable:no-unused-variable */
import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {SheetComponent} from "./components/sheet-component/sheet.component";
import {SheetHeaderComponent} from "./components/sheet-component/sheet-header-component/sheet-header.component";
import {PortraitComponent} from "./components/sheet-component/sheet-header-component/portrait-component/portrait.component";
import {IdentityComponent} from "./components/sheet-component/sheet-header-component/identity-component/identity.component";
import {PlayerInformationComponent} from "./components/sheet-component/sheet-header-component/player-information-component/player-information.component";
import {DescriptionComponent} from "./components/sheet-component/sheet-header-component/description-component/description.component";
import {PointsComponent} from "./components/sheet-component/sheet-header-component/points-component/points.component";

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
        PointsComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});