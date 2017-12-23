import {MetaDataTemplate} from './metadata.model';
import {SheetTemplate} from '..//sheet-template.model';


describe('Model Object MetaDataTemplate', () => {
  let template: SheetTemplate;

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    const metadata = new MetaDataTemplate();

    expect(metadata).toBeTruthy();
  });

  it('should have an id ', () => {
    const metadata = new MetaDataTemplate();

    expect(metadata.id).toBeTruthy();
  });

  it('should have a createdOn date set ', () => {
    const metadata = new MetaDataTemplate();

    expect(metadata.createdOn).toBeTruthy();
  });

  it('should have a lastModified date set', () => {
    const metadata = new MetaDataTemplate();

    expect(metadata.lastModified).toBeTruthy();
  });
});
