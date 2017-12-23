import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateAdvantagesComponent} from './advantages.component';
import {GurpsyMaterialModule} from '../../../modules/material.module';
import {LibraryService} from '../../../services/library/library.service';
import {GurpsyAngularModule} from '../../../modules/angular.module';

describe('UpdateAdvantagesComponent', () => {
  let component: UpdateAdvantagesComponent;
  let fixture: ComponentFixture<UpdateAdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UpdateAdvantagesComponent
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
    fixture = TestBed.createComponent(UpdateAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
