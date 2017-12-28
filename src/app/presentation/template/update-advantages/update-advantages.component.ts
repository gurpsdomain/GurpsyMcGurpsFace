import {Component, OnInit, ViewChild} from '@angular/core';
import {LibraryService} from '../../../services/library/library.service';
import {AdvantagesLibrary} from '../../../models/library/advantages/advantages.model';
import {AdvantageLibrary} from '../../../models/library/advantage/advantage.model';
import {AdvantagesDatasource} from '../../datasources/advantages/advantages.datasource';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'gurpsy-update-advantages',
  templateUrl: './update-advantages.component.html',
  styleUrls: ['./update-advantages.component.scss']
})
export class UpdateAdvantagesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['name', 'type', 'reference'];
  dataSource = undefined;
  dataSize = 0;

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.libraryService.getAdvantages().then(advantages => this.setAdvantages(advantages));
  }

  private setAdvantages(advantages: AdvantagesLibrary): void {
    this.dataSize = advantages.advantages.length;
    this.dataSource = new AdvantagesDatasource(advantages, this.paginator, this.sort);
  }

  public onSelectAdvantage(advantage: AdvantageLibrary): void {
    console.log('AdvantageTemplate selected: ', advantage);
  }
}


