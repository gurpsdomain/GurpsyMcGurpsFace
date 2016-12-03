/* tslint:disable:no-unused-variable */
import {DescriptionComponent} from "./description.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

////////  SPECS  /////////////
describe('DescriptionComponent', function () {
  let de: DebugElement;
  let comp: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create Description component', () => expect(comp).toBeDefined());
});
