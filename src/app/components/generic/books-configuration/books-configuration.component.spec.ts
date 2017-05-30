import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BooksConfigurationComponent} from './books-configuration.component';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {SettingsStorageDelegate} from '../../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {SheetStorageDelegate} from '../../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';
import {JsonService} from '../../../services/back-end/json/json.service';

describe('BooksConfigurationComponent', () => {
  let component: BooksConfigurationComponent;
  let fixture: ComponentFixture<BooksConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksConfigurationComponent],
      providers: [
        JsonService,
        PageReferenceService,
        SettingsService,
        SettingsStorageDelegate,
        SheetStorageDelegate
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create a reusable generic Books Configuration Component', () => {
  //   expect(component).toBeTruthy();
  // });
});
