/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AdvantagesDisadvantagesComponent} from './advantages-disadvantages.component';
import {TranslateModule} from '@ngx-translate/core';
import {AdvantagesComponent} from '../../../reusable/advantages/advantages.component';
import {DisadvantagesComponent} from '../../../reusable/disadvantages/disadvantages.component';
import {StorageService} from '../../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {PageReferenceComponent} from '../../../../generic/page-reference/page-reference.component';
import {SettingsService} from '../../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../../services/front-end/sheet/sheet.service';

describe('AdvantagesComponent', () => {
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
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate
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
