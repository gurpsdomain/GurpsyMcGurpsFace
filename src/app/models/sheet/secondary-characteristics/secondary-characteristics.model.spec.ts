import {Template} from '../../template/template.model';
import {SecondaryCharacteristics} from './secondary-characteristics.model';


describe('Model Object SecondaryCharacteristics', () => {
  let template: Template;

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const secondaryCharacteristics = new SecondaryCharacteristics(template);

    expect(secondaryCharacteristics).toBeTruthy();
  });

  it('should use the SizeModifier from the template', () => {
    template.size = 37;

    const secondaryCharacteristics = new SecondaryCharacteristics(template);

    expect(secondaryCharacteristics.sizeModifier).toBe(37);
  });
});
