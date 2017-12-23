import {Template} from '../../../template/template.model';

export class Identity {

  portrait: string;
  name: string;
  title: string;
  religion: string;

  constructor(template: Template) {
    this.portrait = template.portrait;
    this.name = template.name;
    this.title = template.title;
    this.religion = template.religion;
  }
}
