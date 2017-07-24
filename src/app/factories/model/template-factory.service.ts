import { Injectable } from '@angular/core';
import {Template} from '../../models/sheet/template/template.model';

@Injectable()
export class TemplateFactoryService {

  public createTemplate(): Template {
    return new Template();
  }
}
