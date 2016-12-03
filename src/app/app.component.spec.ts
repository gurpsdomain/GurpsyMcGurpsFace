/* tslint:disable:no-unused-variable */
import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {SheetComponent} from "./sheet-component/sheet.component";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SheetComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
