import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BooksConfigurationComponent} from './books-configuration.component';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {SettingsStorageService} from '../../../services/back-end/settings-storage/settings-storage.service';
import {TemplateStorageService} from '../../../services/back-end/template-storage/template-storage.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {LoggingService} from '../../../services/back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('BooksConfigurationComponent', () => {
  let component: BooksConfigurationComponent;
  let fixture: ComponentFixture<BooksConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BooksConfigurationComponent],
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        PageReferenceService,
        SettingsService,
        SettingsStorageService,
        TemplateStorageService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
