import {SheetTemplate} from '../../sheet-template/sheet-template.model';
import {Points} from './points.model';
import {Skill} from '../../sheet-template/skill/skill.model';


describe('Model Object Points', () => {
  let template: SheetTemplate;

  beforeEach(() => template = new SheetTemplate());

  it('should be created', () => {
    const points = new Points(template);

    expect(points).toBeTruthy();
  });

  it('should have by default 0 Advantages Points', () => {
    const points = new Points(template);

    expect(points.advantages).toBe(0);
  });

  it('should have by default 0 Attributes Points', () => {
    const points = new Points(template);

    expect(points.attributes).toBe(0);
  });


  it('should have by default 0 Disadvantages Points', () => {
    const points = new Points(template);

    expect(points.disadvantages).toBe(0);
  });

  it('should have by default 0 Quirks Points', () => {
    const points = new Points(template);

    expect(points.quirks).toBe(0);
  });

  it('should have by default 0 Race Points', () => {
    const points = new Points(template);

    expect(points.race).toBe(0);
  });

  it('should have by default 0 Spells Points', () => {
    const points = new Points(template);

    expect(points.spells).toBe(0);
  });

  it('should have by default 0 Skill Points', () => {
    const points = new Points(template);

    expect(points.skills).toBe(0);
  });

  it('should add the point value of the Skills from the Template', () => {
    const skillOne = new Skill();
    skillOne.points = 1;

    const skillTwo = new Skill();
    skillTwo.points = 2;

    template.skills.push(skillOne);
    template.skills.push(skillTwo);

    const points = new Points(template);

    expect(points.skills).toBe(3);
  });
});
