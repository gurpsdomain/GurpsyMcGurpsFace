import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvantagesStepperComponent} from './advantages-stepper.component';
import {AdvantagesTableComponent} from '../../tables/advantages-table/advantages-table.component';
import {GurpsyAngularModule} from '../../../../modules/angular.module';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {LibraryService} from '../../../../services/library/library.service';

describe('AdvantagesStepperComponent', () => {
  let component: AdvantagesStepperComponent;
  let fixture: ComponentFixture<AdvantagesStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesStepperComponent,
        AdvantagesTableComponent],
      imports: [
        GurpsyAngularModule,
        GurpsyMaterialModule
      ],
      providers: [
        LibraryService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
