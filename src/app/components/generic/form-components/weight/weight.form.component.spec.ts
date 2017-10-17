import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeightFormComponent} from './weight.form.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsService} from '../../../../services/front-end/settings/settings.service';
import {SettingsStorageService} from '../../../../services/back-end/settings-storage/settings-storage.service';
import {LoggingService} from '../../../../services/back-end/logging/logging.service';

describe('WeightFormComponent', () => {
  let component: WeightFormComponent;
  let fixture: ComponentFixture<WeightFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeightFormComponent
      ],
      imports: [
        GurpsyMaterialModule,
        GurpsyAngularModule,
        TranslateModule.forRoot()
      ],
      providers: [
        LoggingService,
        SettingsService,
        SettingsStorageService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
