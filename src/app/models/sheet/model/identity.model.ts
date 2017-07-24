import {Template} from '../template/template.model';
export class Identity {

  portrait: string;
  name: string;
  title: string;
  religion: string;

  constructor(updateSheet: Template) {
    this.portrait = updateSheet.portrait;
    this.name = updateSheet.name;
    this.title = updateSheet.title;
    this.religion = updateSheet.religion;
  }
}
