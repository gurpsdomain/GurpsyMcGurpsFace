import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitUpdaterDialogComponent } from './portrait-updater-dialog.component';

describe('PortraitUpdaterDialogComponent', () => {
  let component: PortraitUpdaterDialogComponent;
  let fixture: ComponentFixture<PortraitUpdaterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitUpdaterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitUpdaterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
