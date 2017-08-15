import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SheetService} from '../../services/front-end/sheet/sheet.service';
import {SheetTemplate} from '../../models/sheet-template/sheet-template.model';

@Component({
  selector: 'gurpsy-select-sheet',
  templateUrl: './select-sheet.component.html',
  styleUrls: ['./select-sheet.component.scss']
})
export class SelectSheetComponent implements OnInit {

  public templates: SheetTemplate[] = [];

  @Output() public createTemplate: EventEmitter<any> = new EventEmitter();

  constructor(private sheetService: SheetService) {
  }

  ngOnInit() {
    this.sheetService.getTemplates().then(templates => this.setTemplates(templates));
    this.sheetService.templatesUpdated$.subscribe(templates => this.setTemplates(templates));
  }

  /**
   * Select the given template
   *
   * @param {SheetTemplate} template
   */
  public onTemplateSelected(template: SheetTemplate): void {
    this.sheetService.loadExistingTemplate(template);
  }

  /**
   * Create and load a new Template
   */
  public onCreateTemplate(): void {
    this.createTemplate.next();
  }

  private setTemplates(templates: SheetTemplate[]): void {
    this.templates = templates;
  }
}
