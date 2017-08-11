import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PageReferenceComponent} from './page-reference.component';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';
import {TemplateStorageService} from '../../../services/back-end/template-storage/template-storage.service';
import {SettingsStorageService} from '../../../services/back-end/settings-storage/settings-storage.service';
import {LoggingService} from '../../../services/back-end/logging/logging.service';
import {TranslateModule} from '@ngx-translate/core';

describe('PageReferenceComponent', () => {
  let component: PageReferenceComponent;
  let fixture: ComponentFixture<PageReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
        PageReferenceComponent
      ],
      providers: [
        LoggingService,
        PageReferenceService,
        SettingsService,
        SettingsStorageService,
        TemplateStorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
