import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetService} from '../../../services/sheet/sheet.service';
import {Template} from '../../../models/template/template.model';

@Component({
  selector: 'gurpsy-select-sheet',
  templateUrl: './select-sheet.component.html',
  styleUrls: ['./select-sheet.component.scss']
})
export class SelectSheetComponent implements OnInit {

  public templates: Template[] = [];

  @Output() public loadTemplateFromFile: EventEmitter<any> = new EventEmitter();
  @Output() public createTemplate: EventEmitter<any> = new EventEmitter();

  constructor(private sheetService: SheetService) {
  }

  ngOnInit() {
    this.sheetService.getTemplates().then(templates => this.setTemplates(templates));
    this.sheetService.templatesUpdated$.subscribe(templates => this.setTemplates(templates));
  }

  /**
   * Create and load a new Template
   */
  public onCreateTemplate(): void {
    this.createTemplate.next();
  }

  /**
   * Load a Template from file
   */
  public onLoadTemplateFromFile(): void {
    this.loadTemplateFromFile.next();
  }

  /**
   * Select the given template
   *
   * @param {Template} template
   */
  public onTemplateSelected(template: Template): void {
    this.sheetService.loadExistingTemplate(template);
  }

  private setTemplates(templates: Template[]): void {
    this.templates = templates;
  }
}
