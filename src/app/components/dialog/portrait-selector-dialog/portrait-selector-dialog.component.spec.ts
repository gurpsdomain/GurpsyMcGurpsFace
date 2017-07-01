import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitSelectorDialogComponent } from './portrait-selector-dialog.component';

describe('PortraitSelectorDialogComponent', () => {
  let component: PortraitSelectorDialogComponent;
  let fixture: ComponentFixture<PortraitSelectorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitSelectorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitSelectorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
