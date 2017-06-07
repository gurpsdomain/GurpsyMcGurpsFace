import {Component, Input, OnInit} from '@angular/core';
import {PageReferenceService} from '../../../services/front-end/page-reference/page-reference.service';
import {SettingsService} from '../../../services/front-end/settings/settings.service';

@Component({
  selector: 'gurpsy-page-reference',
  templateUrl: 'page-reference.component.html',
  styleUrls: ['page-reference.component.scss']
})
export class PageReferenceComponent implements OnInit {

  @Input()
  public pageReference: string;
  public available = false;

  constructor(private pageReferenceService: PageReferenceService, private settingsService: SettingsService) {
  }

  public ngOnInit(): void {
    this.initializeAvailability();
    this.settingsService.getSettingsObserver()
      .subscribe(settings => this.initializeAvailability());
  }

  public onGotoReference(): void {
    this.pageReferenceService.showReference(this.pageReference);
  }

  private initializeAvailability(): void {
    this.pageReferenceService.isReferenceAvailable(this.pageReference)
      .then(isReferenced => this.setAvailable(isReferenced))
      .catch(any => this.setAvailable(false));
  }

  private setAvailable(available: boolean): void {
    this.available = available;
  }
}
