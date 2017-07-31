/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SpellsComponent} from './spells.component';
import {TranslateModule} from '@ngx-translate/core';
import {StorageService} from '../../../../services/back-end/storage/storage.service';
// tslint:disable-next-line max-line-length
import {SettingsStorageDelegate} from '../../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {PageReferenceComponent} from '../../../generic/page-reference/page-reference.component';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';
import {SheetService} from '../../../../services/front-end/sheet/sheet.service';

describe('SpellsComponent', () => {
  let component: SpellsComponent;
  let fixture: ComponentFixture<SpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageReferenceComponent,
        SpellsComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        SettingsService,
        LoggingService,
        SheetService,
        StorageService,
        SettingsStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
