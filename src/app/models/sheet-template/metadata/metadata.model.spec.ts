import {MetaData} from './metadata.model';
import {SheetTemplate} from '../../sheet-template/sheet-template.model';


describe('Model Object MetaData', () => {
  let template: SheetTemplate;

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    const metadata = new MetaData();

    expect(metadata).toBeTruthy();
  });

  it('should have an id ', () => {
    const metadata = new MetaData();

    expect(metadata.id).toBeTruthy();
  });

  it('should have a createdOn date set ', () => {
    const metadata = new MetaData();

    expect(metadata.createdOn).toBeTruthy();
  });

  it('should have a lastModified date set', () => {
    const metadata = new MetaData();

    expect(metadata.lastModified).toBeTruthy();
  });
});
