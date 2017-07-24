import { Injectable } from '@angular/core';
import {Template} from '../../models/sheet/template/template.model';

@Injectable()
export class ModelFactoryService {

  public createModel(): Template {
    return new Template();
  }
}
