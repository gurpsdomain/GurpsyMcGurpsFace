import {SheetTemplate} from '../../../sheet-template/sheet-template.model';

export class Identity {

  portrait: string;
  name: string;
  title: string;
  religion: string;

  constructor(template: SheetTemplate) {
    this.portrait = template.portrait;
    this.name = template.name;
    this.title = template.title;
    this.religion = template.religion;
  }
}
