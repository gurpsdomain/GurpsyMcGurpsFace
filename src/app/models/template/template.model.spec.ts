import {Template, TemplateComparison} from './template.model';

describe('Model Object Template', () => {
  let template: Template;

  const DEFAULT_POINTS_TOTAL = 100;

  beforeEach(() => template = new Template());

  it('should be created', () => {
    expect(template).toBeTruthy();
  });

  it('[equals()] should return SAME when equals() is called on the same sheet.', () => {
    const equals = template.equals(template);

    expect(equals).toBe(TemplateComparison.SAME);
  });

  it('[equals()] should return DIFFERENT when equals() is called on a different sheet.', () => {
    const different = new Template();
    const equals = template.equals(different);

    expect(equals).toBe(TemplateComparison.DIFFERENT);
  });

  it('[equals()] should return NEWER when equals() is called on a newer sheet.', () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const olderTemplate = new Template();
    olderTemplate.id = template.id;
    olderTemplate.lastModified = yesterday;

    template.lastModified = today;

    const equals = template.equals(olderTemplate);

    expect(equals).toBe(TemplateComparison.NEWER);
  });

  it('[equals()] should return OLDER when equals() is called on a older sheet.', () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const newerTemplate = new Template();
    newerTemplate.id = template.id;
    newerTemplate.lastModified = today;

    template.lastModified = yesterday;

    const equals = template.equals(newerTemplate);

    expect(equals).toBe(TemplateComparison.OLDER);
  });

  it('[getTotalPoints()] should return the default of 100 when no Rewards have been given.', () => {
    const total = template.getTotalPoints();

    expect(total).toBe(DEFAULT_POINTS_TOTAL);
  });

  it('[getTotalPoints()] should return the points total, including the Rewards.', () => {
    template.addReward(1, new Date());
    template.addReward(2, new Date());

    const total = template.getTotalPoints();

    expect(total).toBe(DEFAULT_POINTS_TOTAL + 3);
  });
});

