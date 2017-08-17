import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PageReferenceComponent} from './page-reference.component';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {TranslateModule} from '@ngx-translate/core';

describe('PageReferenceComponent', () => {
  let component: PageReferenceComponent;
  let fixture: ComponentFixture<PageReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
        PageReferenceComponent
      ],
      providers: [
        PageReferenceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
