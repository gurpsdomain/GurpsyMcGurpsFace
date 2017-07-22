import { Injectable } from '@angular/core';
import {UpdateSheet} from '../../models/sheet/update/update-sheet.model';

@Injectable()
export class ModelFactoryService {

  public createModel(): UpdateSheet {
    return new UpdateSheet();
  }
}
