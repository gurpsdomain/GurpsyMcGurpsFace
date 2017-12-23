import {Identity} from './identity.model';
import {Template} from '../../../template/template.model';

describe('Model Object Identity', () => {

  const IDENTITY_NAME = 'Dai Blackthorn';
  const IDENTITY_TITLE = 'Captain';
  const IDENTITY_RELIGION = 'Atheist';
  const IDENTITY_PORTRAIT = 'Base64EncodedImageString';

  let template: Template;

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const identity = new Identity(template);

    expect(identity).toBeTruthy();
  });

  it('should contain the name from the template', () => {
    template.name = IDENTITY_NAME;

    const identity = new Identity(template);

    expect(identity.name).toEqual(IDENTITY_NAME);
  });

  it('should contain the title from the template', () => {
    template.title = IDENTITY_TITLE;

    const identity = new Identity(template);

    expect(identity.title).toEqual(IDENTITY_TITLE);
  });

  it('should contain the religion from the template', () => {
    template.religion = IDENTITY_RELIGION;

    const identity = new Identity(template);

    expect(identity.religion).toEqual(IDENTITY_RELIGION);
  });

  it('should contain the portrait from the template', () => {
    template.portrait = IDENTITY_PORTRAIT;

    const identity = new Identity(template);

    expect(identity.portrait).toEqual(IDENTITY_PORTRAIT);
  });
});
