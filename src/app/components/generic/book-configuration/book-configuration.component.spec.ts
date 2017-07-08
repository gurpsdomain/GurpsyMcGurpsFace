import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BookConfigurationComponent} from './book-configuration.component';
import {TranslateModule} from '@ngx-translate/core';
import {GurpsyMaterialModule} from '../../../modules/material.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BookConfigurationComponent', () => {
  let component: BookConfigurationComponent;
  let fixture: ComponentFixture<BookConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookConfigurationComponent],
      imports: [
        GurpsyMaterialModule,
        TranslateModule.forRoot()
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create a generic BookConfiguration Component', () => {
  //   expect(component).toBeTruthy();
  // });
});
