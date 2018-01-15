/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdvantagesDisadvantagesComponent} from './advantages-disadvantages.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdvantagesComponent} from '../../../reusable/advantages/advantages.component';
import {DisadvantagesComponent} from '../../../reusable/disadvantages/disadvantages.component';
import {SheetService} from '../../../../../services/sheet/sheet.service';
import {SettingsService} from '../../../../../services/settings/settings.service';
import {LoggingService} from '../../../../../services/logging/logging.service';
import {SettingsRepository} from '../../../../../repositories/settings/settings.repository';
import {TemplateRepository} from '../../../../../repositories/template/template.repository';
import {PageReferenceComponent} from '../../../../components/generic/page-reference/page-reference.component';

describe('AdvantagesTableComponent', () => {
  let component: AdvantagesDisadvantagesComponent;
  let fixture: ComponentFixture<AdvantagesDisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesDisadvantagesComponent,
        AdvantagesComponent,
        DisadvantagesComponent,
        PageReferenceComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        SheetService,
        SettingsService,
        LoggingService,
        SettingsRepository,
        TemplateRepository
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesDisadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
