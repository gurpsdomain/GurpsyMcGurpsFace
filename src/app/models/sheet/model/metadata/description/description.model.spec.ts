import {TestBed} from '@angular/core/testing';
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

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const description = new Description(template)

    expect(description).toBeTruthy();
  });

  it('should contain the race from the template', () => {
    template.race = DESCRIPTION_RACE;

    const description = new Description(template);

    expect(description.race).toEqual(DESCRIPTION_RACE);
  });

  it('should contain the gender from the template', () => {
    template.gender = DESCRIPTION_GENDER;

    const description = new Description(template);

    expect(description.gender).toEqual(DESCRIPTION_GENDER);
  });

  it('should contain the age from the template', () => {
    template.age = DESCRIPTION_AGE;

    const description = new Description(template);

    expect(description.age).toEqual(DESCRIPTION_AGE);
  });

  it('should contain the birthday from the template', () => {
    template.birthday = DESCRIPTION_BIRTHDAY;

    const description = new Description(template);

    expect(description.birthday).toEqual(DESCRIPTION_BIRTHDAY);
  });

  it('should contain the height from the template', () => {
    template.height = DESCRIPTION_HEIGHT;

    const description = new Description(template);

    expect(description.height).toEqual(DESCRIPTION_HEIGHT);
  });

  it('should contain the weight from the template', () => {
    template.weight = DESCRIPTION_WEIGHT;

    const description = new Description(template);

    expect(description.weight).toEqual(DESCRIPTION_WEIGHT);
  });

  it('should contain the tech level from the template', () => {
    template.TL = DESCRIPTION_TL;

    const description = new Description(template);

    expect(description.TL).toEqual(DESCRIPTION_TL);
  });

  it('should contain the hair from the template', () => {
    template.hair = DESCRIPTION_HAIR;

    const description = new Description(template);

    expect(description.hair).toEqual(DESCRIPTION_HAIR);
  });

  it('should contain the eyes from the template', () => {
    template.eyes = DESCRIPTION_EYES;

    const description = new Description(template);

    expect(description.eyes).toEqual(DESCRIPTION_EYES);
  });

  it('should contain the skin from the template', () => {
    template.skin = DESCRIPTION_SKIN;

    const description = new Description(template);

    expect(description.skin).toEqual(DESCRIPTION_SKIN);
  });


  it('should contain the hand from the template', () => {
    template.hand = DESCRIPTION_HAND;

    const description = new Description(template);

    expect(description.hand).toEqual(DESCRIPTION_HAND);
  });

})
