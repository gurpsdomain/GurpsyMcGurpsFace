import {TestBed} from '@angular/core/testing';
import {MetaData} from './metadata.model';
import {SheetTemplate} from '../../sheet-template/sheet-template.model';


describe('Model Object MetaData', () => {
  let template: SheetTemplate;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    const metadata = new MetaData(template)

    expect(metadata).toBeTruthy();
  });

  it('should create a Description Model Object', () => {
    const metadata = new MetaData(template)

    expect(metadata.description).toBeTruthy();
  });

  it('should create a Identity Model Object', () => {
    const metadata = new MetaData(template)

    expect(metadata.identity).toBeTruthy();
  });

  it('should create a PlayerInformation Model Object', () => {
    const metadata = new MetaData(template)

    expect(metadata.playerInformation).toBeTruthy();
  });
})
