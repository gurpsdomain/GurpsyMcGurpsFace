import {Injectable} from '@angular/core';
import {Template} from '../../models/sheet/template/template.model';
import {UUID} from 'angular2-uuid';

@Injectable()
export class TemplateFactoryService {

  public createTemplate(): Template {

    const template = new Template();
    template.id = UUID.UUID();

    return template;
  }
}
