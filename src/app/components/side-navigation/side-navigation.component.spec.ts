/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {SheetBodyService} from '../../services/front-end/sheet-body/sheet-body.service';
import {SettingsService} from '../../services/front-end/settings/settings.service';
import {StorageService} from '../../services/back-end/storage/storage.service';
import {SettingsStorageDelegate} from '../../services/back-end/storage/delegates/settings-storage-delegate/settings-storage-delegate';
import {JsonService} from '../../services/back-end/json/json.service';
import {SheetStorageDelegate} from '../../services/back-end/storage/delegates/sheet-storage-delegate/sheet-storage-delegate';

describe('SideNavigationComponent', () => {
  let component: SideNavigationComponent;
  let fixture: ComponentFixture<SideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideNavigationComponent
      ],
      imports: [
        FormsModule,
        TranslateModule.forRoot(),
        MaterialModule],
      providers: [
        SettingsService,
        SettingsStorageDelegate,
        JsonService,
        SheetBodyService,
        SheetStorageDelegate,
        StorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
