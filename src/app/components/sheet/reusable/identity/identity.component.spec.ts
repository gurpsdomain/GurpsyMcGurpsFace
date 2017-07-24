/* tslint:disable:no-unused-variable */
import {IdentityComponent} from './identity.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {ModelService} from '../../../../services/front-end/model/model.service';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {GurpsyMaterialModule} from '../../../../modules/material.module';

describe('IdentityComponent', function () {
  let component: IdentityComponent;
  let fixture: ComponentFixture<IdentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IdentityComponent
      ],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        ModelService,
        SettingsStorageDelegate,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
