/* tslint:disable:no-unused-variable */
import {PointsComponent} from './points.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {TranslateModule} from 'ng2-translate';
import {ModelReadService} from '../../../../services/model-read-service/model-read.service';
import {ReadModelCreaterService} from '../../../../services/read-model-creator-service/read-model-creator.service';

////////  SPECS  /////////////
describe('PointsComponent', function () {
  let de: DebugElement;
  let comp: PointsComponent;
  let fixture: ComponentFixture<PointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PointsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        ModelReadService,
        ReadModelCreaterService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create Points component', () => expect(comp).toBeDefined());
});
