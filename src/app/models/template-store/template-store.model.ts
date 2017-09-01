import {JsonObject, JsonProperty} from 'json2typescript';
import {SheetTemplate} from '../sheet-template/sheet-template.model';

@JsonObject
export class TemplateStore {

  @JsonProperty('templates', [SheetTemplate])
  templates: SheetTemplate[];

  constructor() {
    this.templates = [];
  }

  /**
   * Add a SheetTemplate. If the SheetTemplate has already been added, return false.
   *
   * @param {SheetTemplate} template
   * @return {boolean} True if the SheetTemplate was added, false it was added previously
   */
  public addTemplate(template: SheetTemplate): boolean {
    let added = false;
    if (!this.isPresent(template)) {
      this.templates.push(template);
      added = true;
    }
    return added;
  }

  /**
   * Get the SheetTemplate with the given id. If none are present, return undefined.
   *
   * @param {string} id of the requested SheetTemplate
   * @return {SheetTemplate} The requested SheetTemplate or null if not present
   */
  public getTemplate(id: string): SheetTemplate {
    let template: SheetTemplate = undefined;

    for (const storedTemplate of this.templates) {
      if (storedTemplate.id === id) {
        template = storedTemplate;
        break;
      }
    }

    return template;
  }

  /**
   * Update the given SheetTemplate. The previous version will be removed and the new one will be
   * added. If the given SheetTemplate was not yet in the list, it can not be updated and a false
   * will be returned.
   *
   * @param {SheetTemplate} The SheetTemplate to update
   * @return {boolean} True if the SheetTemplate was updated, False if there was nothing to update
   */
  public updateTemplate(template: SheetTemplate): boolean {

    const newTemplates: SheetTemplate[] = [];

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

  private isPresent(template: SheetTemplate): boolean {
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