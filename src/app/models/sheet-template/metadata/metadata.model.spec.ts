import {MetaData} from './metadata.model';
import {SheetTemplate} from '../../sheet-template/sheet-template.model';


describe('Model Object MetaData', () => {
  let template: SheetTemplate;

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    const metadata = new MetaData()

    expect(metadata).toBeTruthy();
  });
})
