import {SheetTemplate, TemplateComparison} from './sheet-template.model';

describe('Model Object SheetTemplate', () => {
  let template: SheetTemplate;

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    expect(template).toBeTruthy();
  });

  it('[equals] should return SAME when equals() is called on the same sheet', () => {
    const equals = template.equals(template);

    expect(equals).toBe(TemplateComparison.SAME);
  });

  it('[equals] should return DIFFERENT when equals() is called on a different sheet', () => {
    const different = new SheetTemplate();
    const equals = template.equals(different);

    expect(equals).toBe(TemplateComparison.DIFFERENT);
  });

  it('[equals] should return NEWER when equals() is called on a newer sheet', () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const olderTemplate = new SheetTemplate();
    olderTemplate.id = template.id;
    olderTemplate.lastModified = yesterday;

    template.lastModified = today;

    const equals = template.equals(olderTemplate);

    expect(equals).toBe(TemplateComparison.NEWER);
  });

  it('[equals] should return OLDER when equals() is called on a older sheet', () => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const newerTemplate = new SheetTemplate();
    newerTemplate.id = template.id;
    newerTemplate.lastModified = today;

    template.lastModified = yesterday;

    const equals = template.equals(newerTemplate);

    expect(equals).toBe(TemplateComparison.OLDER);
  });
});

