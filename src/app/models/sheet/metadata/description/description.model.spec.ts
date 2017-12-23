import {Template} from '../../../template/template.model';
import {Description} from './description.model';

describe('Model Object Description', () => {

  const DESCRIPTION_RACE = 'Human';
  const DESCRIPTION_GENDER = 'Male';
  const DESCRIPTION_AGE = 37;
  const DESCRIPTION_BIRTHDAY = '01-01-2001';
  const DESCRIPTION_HEIGHT = 28;
  const DESCRIPTION_WEIGHT = 42;
  const DESCRIPTION_TL = 1;
  const DESCRIPTION_HAIR = 'Black';
  const DESCRIPTION_EYES = 'Brown';
  const DESCRIPTION_SKIN = 'White';
  const DESCRIPTION_HAND = 'Right';

  let template: Template;

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const description = new Description(template);

    expect(description).toBeTruthy();
  });

  describe('should contain the', () => {
    it('race from the template', () => {
      template.race = DESCRIPTION_RACE;

      const description = new Description(template);

      expect(description.race).toEqual(DESCRIPTION_RACE);
    });

    it('gender from the template', () => {
      template.gender = DESCRIPTION_GENDER;

      const description = new Description(template);

      expect(description.gender).toEqual(DESCRIPTION_GENDER);
    });

    it('age from the template', () => {
      template.age = DESCRIPTION_AGE;

      const description = new Description(template);

      expect(description.age).toEqual(DESCRIPTION_AGE);
    });

    it('birthday from the template', () => {
      template.birthday = DESCRIPTION_BIRTHDAY;

      const description = new Description(template);

      expect(description.birthday).toEqual(DESCRIPTION_BIRTHDAY);
    });

    it('weight from the template', () => {
      template.weight = DESCRIPTION_WEIGHT;

      const description = new Description(template);

      expect(description.weight.preferred).toEqual(DESCRIPTION_WEIGHT);
    });

    it('height from the template', () => {
      template.height = DESCRIPTION_HEIGHT;

      const description = new Description(template);

      expect(description.height.preferred).toEqual(DESCRIPTION_HEIGHT);
    });

    it('tech level from the template', () => {
      template.tl = DESCRIPTION_TL;

      const description = new Description(template);

      expect(description.tl).toEqual(DESCRIPTION_TL);
    });

    it('hair from the template', () => {
      template.hair = DESCRIPTION_HAIR;

      const description = new Description(template);

      expect(description.hair).toEqual(DESCRIPTION_HAIR);
    });

    it('eyes from the template', () => {
      template.eyes = DESCRIPTION_EYES;

      const description = new Description(template);

      expect(description.eyes).toEqual(DESCRIPTION_EYES);
    });

    it('skin from the template', () => {
      template.skin = DESCRIPTION_SKIN;

      const description = new Description(template);

      expect(description.skin).toEqual(DESCRIPTION_SKIN);
    });

    it('hand from the template', () => {
      template.hand = DESCRIPTION_HAND;

      const description = new Description(template);

      expect(description.hand).toEqual(DESCRIPTION_HAND);
    });
  });
});
