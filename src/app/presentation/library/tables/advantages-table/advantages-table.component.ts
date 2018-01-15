import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LibraryService} from '../../../../services/library/library.service';
import {AdvantagesLibrary} from '../../../../models/library/advantages/advantages.model';
import {AdvantageLibrary} from '../../../../models/library/advantage/advantage.model';
import {AdvantagesDatasource} from '../../datasources/advantages/advantages.datasource';
import {MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'gurpsy-advantages-table',
  templateUrl: './advantages-table.component.html',
  styleUrls: ['./advantages-table.component.scss']
})
export class AdvantagesTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  displayedColumns = ['name', 'type', 'reference'];
  dataSource = undefined;

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit(): void {
    this.libraryService.getAdvantages().then(advantages => this.setAdvantages(advantages));
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }

  private setAdvantages(advantages: AdvantagesLibrary): void {
    this.dataSource = new AdvantagesDatasource(advantages, this.sort);
  }

  public onSelectAdvantage(advantage: AdvantageLibrary): void {
    console.log('AdvantageTemplate selected: ', advantage);
  }
}


