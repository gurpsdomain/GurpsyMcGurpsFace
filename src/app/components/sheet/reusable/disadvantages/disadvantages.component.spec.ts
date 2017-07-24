/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DisadvantagesComponent} from './disadvantages.component';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {TranslateModule} from '@ngx-translate/core';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';
import {HttpModule} from '@angular/http';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';

describe('DisadvantagesComponent', () => {
  let component: DisadvantagesComponent;
  let fixture: ComponentFixture<DisadvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DisadvantagesComponent,
        PageReferenceComponent
      ],
      imports: [
        HttpModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        SettingsStorageDelegate,
        LoggingService,
        ModelService,
        StorageService,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisadvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
