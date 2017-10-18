import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WeightFormComponent} from './weight.form.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsService} from '../../../../services/settings/settings.service';
import {SettingsRepository} from '../../../../repositories/settings/settings.repository';
import {LoggingService} from '../../../../services/logging/logging.service';

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
        SettingsRepository
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
