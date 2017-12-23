import {MetaData} from './metadata.model';
import {Template} from '../../template/template.model';


describe('Model Object MetaDataTemplate', () => {
  let template: Template;

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const metadata = new MetaData(template);

    expect(metadata).toBeTruthy();
  });

  it('should create a Description Model Object', () => {
    const metadata = new MetaData(template);

    expect(metadata.description).toBeTruthy();
  });

  it('should create a Identity Model Object', () => {
    const metadata = new MetaData(template);

    expect(metadata.identity).toBeTruthy();
  });

  it('should create a PlayerInformation Model Object', () => {
    const metadata = new MetaData(template);

    expect(metadata.playerInformation).toBeTruthy();
  });
});
