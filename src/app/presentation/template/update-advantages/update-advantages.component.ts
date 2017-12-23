import {Component, OnInit} from '@angular/core';
import {LibraryService} from '../../../services/library/library.service';
import {AdvantagesLibrary} from '../../../models/library/advantages/advantages.model';
import {AdvantageLibrary} from '../../../models/library/advantage/advantage.model';
import {AdvantagesDatasource} from '../../datasources/advantages/advantages.datasource';

@Component({
  selector: 'gurpsy-update-advantages',
  templateUrl: './update-advantages.component.html',
  styleUrls: ['./update-advantages.component.scss']
})
export class UpdateAdvantagesComponent implements OnInit {

  displayedColumns = ['name', 'type', 'reference'];
  dataSource = new AdvantagesDatasource(new AdvantagesLibrary());

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.libraryService.getAdvantages().then(advantages => this.setAdvantages(advantages));
  }

  private setAdvantages(advantages: AdvantagesLibrary): void {
    this.dataSource = new AdvantagesDatasource(advantages);
  }

  public onSelectAdvantage(advantage: AdvantageLibrary): void {
    console.log('AdvantageTemplate selected: ', advantage);
  }
}


