import {Template} from '../../template/template.model';
import {Points} from './points.model';
import {SkillTemplate} from '../../template/skill/skill.model';


describe('Model Object Points', () => {
  let template: Template;

  beforeEach(() => template = new Template());

  it('should be created', () => {
    const points = new Points(template);

    expect(points).toBeTruthy();
  });

  it('should have by default 0 AdvantagesLibrary Points', () => {
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

  it('should have by default 0 SkillTemplate Points', () => {
    const points = new Points(template);

    expect(points.skills).toBe(0);
  });

  it('should add the point value of the Skills from the Template', () => {
    const skillOne = new SkillTemplate();
    skillOne.points = 1;

    const skillTwo = new SkillTemplate();
    skillTwo.points = 2;

    template.skills.push(skillOne);
    template.skills.push(skillTwo);

    const points = new Points(template);

    expect(points.skills).toBe(3);
  });
});
