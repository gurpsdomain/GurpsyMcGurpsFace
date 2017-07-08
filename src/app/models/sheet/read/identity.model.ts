import {UpdateSheet} from '../update/update-sheet.model';
export class Identity {

  portrait: string;
  name: string;
  title: string;
  religion: string;

  constructor(updateSheet: UpdateSheet) {
    this.portrait = updateSheet.portrait;
    this.name = '';
    this.title = '';
    this.religion = '';
  }
}
