import {Component, OnInit} from '@angular/core';
import {LibraryService} from '../../../services/library/library.service';
import {Advantages} from '../../../models/library/advantages/advantages.model';
import {Advantage} from '../../../models/library/advantage/advantage.model';
import {AdvantagesDatasource} from '../../datasources/advantages/advantages.datasource';

@Component({
  selector: 'gurpsy-update-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class UpdateAdvantagesComponent implements OnInit {

  displayedColumns = ['name', 'type', 'reference'];
  dataSource = undefined;

  public advantages: Advantages = new Advantages();

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.libraryService.getAdvantages().then(advantages => this.setAdvantages(advantages));
  }

  private setAdvantages(advantages: Advantages): void {
    this.dataSource = new AdvantagesDatasource(advantages);
    this.advantages = advantages;
  }

  public onSelectAdvantage(advantage: Advantage): void {
    console.log('Advantage selected: ', advantage);
  }
}


