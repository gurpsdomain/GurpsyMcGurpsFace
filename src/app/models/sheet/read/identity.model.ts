import {UpdateSheet} from '../update/update-sheet.model';
export class Identity {

  portrait: string;
  name: string;
  title: string;
  religion: string;

  constructor(updateSheet: UpdateSheet) {
    this.portrait = updateSheet.portrait;
    this.name = updateSheet.name;
    this.title = updateSheet.title;
    this.religion = updateSheet.religion;
  }
}

export class IdentityDTO {
  name: string;
  title: string;
  religion: string;
}
