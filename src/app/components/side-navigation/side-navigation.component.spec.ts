/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '@angular/material';
import {TranslateModule} from 'ng2-translate';
import {FormsModule} from '@angular/forms';
import {SideNavigationComponent} from './side-navigation.component';
import {ConfigurationService} from '../../services/configuration-service/configuration.service';

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
        MaterialModule.forRoot()],
      providers: [
        ConfigurationService
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
