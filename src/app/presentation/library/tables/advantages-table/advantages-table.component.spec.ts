import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvantagesTableComponent} from './advantages-table.component';
import {GurpsyMaterialModule} from '../../../../modules/material.module';
import {LibraryService} from '../../../../services/library/library.service';
import {GurpsyAngularModule} from '../../../../modules/angular.module';

describe('AdvantagesTableComponent', () => {
  let component: AdvantagesTableComponent;
  let fixture: ComponentFixture<AdvantagesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvantagesTableComponent
      ],
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
    fixture = TestBed.createComponent(AdvantagesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
