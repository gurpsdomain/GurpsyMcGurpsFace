/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SheetBodyComponent} from './sheet-body.component';
import {TranslateModule} from 'ng2-translate';
import {NotesComponent} from './notes-component/notes.component';

describe('SheetBodyComponent', () => {
  let component: SheetBodyComponent;
  let fixture: ComponentFixture<SheetBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SheetBodyComponent,
        NotesComponent],
      imports: [
        TranslateModule.forRoot()
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
