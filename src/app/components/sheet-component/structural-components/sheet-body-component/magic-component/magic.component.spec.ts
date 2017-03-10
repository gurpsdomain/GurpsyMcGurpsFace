/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MagicComponent} from './magic.component';
import {TranslateModule} from 'ng2-translate';

describe('MagicComponent', () => {
  let component: MagicComponent;
  let fixture: ComponentFixture<MagicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MagicComponent
      ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
