import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeightDisplayComponent} from './weight-display.component';
import {TranslateModule} from '@ngx-translate/core';
import {LoggingService} from '../../../../services/logging/logging.service';
import {TemplateRepository} from '../../../../repositories/template/template.repository';
import {SheetService} from '../../../../services/sheet/sheet.service';

describe('WeightDisplayComponent', () => {
  let component: WeightDisplayComponent;
  let fixture: ComponentFixture<WeightDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeightDisplayComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        TemplateRepository,
        SheetService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
