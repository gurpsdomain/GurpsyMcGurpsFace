import {JsonObject, JsonProperty} from 'json2typescript';
import {TemplateDM} from '../sheet/template/template.model';

@JsonObject
export class TemplatesDM {

  @JsonProperty('templates', [TemplateDM])
  templates: TemplateDM[];

  constructor() {
    this.templates = [];
  }

  /**
   * Add a TemplateDM. If the TemplateDM has already been added, return false.
   *
   * @param {TemplateDM} template
   * @return {boolean} True if the TemplateDM was added, false it was added previously
   */
  public addTemplate(template: TemplateDM): boolean {
    let added = false;
    if (!this.isPresent(template)) {
      this.templates.push(template);
      added = true;
    }
    return added;
  }

  /**
   * Get the TemplateDM with the given id. If none are present, return undefined.
   *
   * @param {string} id of the requested TemplateDM
   * @return {TemplateDM} The requested TemplateDM or null if not present
   */
  public getTemplate(id: string): TemplateDM {
    let template: TemplateDM = undefined;

    for (const storedTemplate of this.templates) {
      if (storedTemplate.id === id) {
        template = storedTemplate;
        break;
      }
    }

    return template;
  }

  /**
   * Update the given TemplateDM. The previous version will be removed and the new one will be
   * added. If the given TemplateDM was not yet in the list, it can not be updated and a false
   * will be returned.
   *
   * @param {TemplateDM} The TemplateDM to update
   * @return {boolean} True if the TemplateDM was updated, False if there was nothing to update
   */
  public updateTemplate(template: TemplateDM): boolean {

    const newTemplates: TemplateDM[] = [];

    for (const storedTemplate of this.templates) {
      if (storedTemplate.id !== template.id) {
        newTemplates.push(storedTemplate);
      }
    }

    if (newTemplates.length === this.templates.length) {
      return false;
    } else {
      newTemplates.push(template);
      this.templates = newTemplates;
      return true;
    }

  }

  private isPresent(template: TemplateDM): boolean {
    let present = false;

    for (const storedTemplate of this.templates) {
      if (storedTemplate.id === template.id) {
        present = true;
        break;
      }
    }

    return present;
  }
}
