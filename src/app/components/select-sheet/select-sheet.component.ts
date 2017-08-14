import {Component, OnInit} from '@angular/core';
import {SheetService} from '../../services/front-end/sheet/sheet.service';
import {TemplateDM} from '../../models/sheet/template/template.model';

@Component({
  selector: 'gurpsy-select-sheet',
  templateUrl: './select-sheet.component.html',
  styleUrls: ['./select-sheet.component.scss']
})
export class SelectSheetComponent implements OnInit {

  public templates: TemplateDM[] = [];

  constructor(private sheetService: SheetService) {
  }

  ngOnInit() {
    this.sheetService.getTemplates().then(templates => this.setTemplates(templates));
    this.sheetService.templatesUpdated$.subscribe(templates => this.setTemplates(templates));
  }

  public onTemplateSelected(template: TemplateDM): void {
    this.sheetService.loadExistingTemplate(template);
  }

  private setTemplates(templates: TemplateDM[]): void {
    this.templates = templates;
  }
}
