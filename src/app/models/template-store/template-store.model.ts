import {JsonObject, JsonProperty} from 'json2typescript';
import {Template} from '../template/template.model';

@JsonObject
export class TemplateStore {

  @JsonProperty('templates', [Template])
  templates: Template[];

  constructor() {
    this.templates = [];
  }

  /**
   * Add a Template. If the Template has already been added, return false. If the
   * optional boolean overwrite is set to true, the stored sheet with the same id will be
   * overwritten.
   *
   * @param {Template} template
   * @param {boolean} overwrite, defaults to false. If true an already stored sheet with the
   *    same id will be overwritten.
   * @return {boolean} True if the Template was added, false it was added previously
   */
  public addTemplate(template: Template, overwrite?: boolean): boolean {
    let added = false;

    if (!this.isPresent(template)) {
      this.templates.push(template);
      added = true;
    } else if (overwrite) {
      this.updateTemplate(template);
      added = true;
    }

    return added;
  }

  /**
   * Delete the given Template.
   *
   * @param {Template} template
   */
  public deleteTemplate(template: Template): void {

    let index = 0;
    for (const storedTemplate of this.templates) {
      if (storedTemplate.id === template.id) {
        break;
      }
      index++;
    }

    if (index > -1) {
      this.templates.splice(index, 1);
    }
  }

  /**
   * Get the Template with the given id. If none are present, return undefined.
   *
   * @param {string} id of the requested Template
   * @return {Template} The requested Template or null if not present
   */
  public getTemplate(id: string): Template {
    let template: Template;

    for (const storedTemplate of this.templates) {
      if (storedTemplate.id === id) {
        template = storedTemplate;
        break;
      }
    }

    return template;
  }

  /**
   * Update the given Template. The previous version will be removed and the new one will be
   * added. If the given Template was not yet in the list, it can not be updated and a false
   * will be returned.
   *
   * @param {Template} The Template to update
   * @return {boolean} True if the Template was updated, False if there was nothing to update
   */
  public updateTemplate(template: Template): boolean {

    const newTemplates: Template[] = [];

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

  private isPresent(template: Template): boolean {
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
