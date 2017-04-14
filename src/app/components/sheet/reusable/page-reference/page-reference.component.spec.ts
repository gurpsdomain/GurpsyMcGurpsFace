import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReferenceComponent } from './page-reference.component';

describe('PageReferenceComponent', () => {
  let component: PageReferenceComponent;
  let fixture: ComponentFixture<PageReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  a reusable Page-reference Component', () => {
    expect(component).toBeTruthy();
  });
});
