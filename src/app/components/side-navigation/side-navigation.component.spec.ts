/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {SheetBodyService} from '../../services/sheet-body-service/sheet-body.service';
import {ConfigService} from '../../services/config-service/config.service';
import {StorageService} from '../../services/storage-service/storage.service';
import {ConfigStorageDelegate} from '../../services/storage-service/delegates/config-storage-delegate/config-storage-delegate';
import {JsonService} from '../../services/json-service/json.service';
import {SheetStorageDelegate} from '../../services/storage-service/delegates/sheet-storage-delegate/sheet-storage-delegate';

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
        ConfigService,
        ConfigStorageDelegate,
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
