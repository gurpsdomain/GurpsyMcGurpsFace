import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import {AdvantagesLibrary} from '../../../../models/library/advantages/advantages.model';
import {AdvantageLibrary} from '../../../../models/library/advantage/advantage.model';
import {MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


export class AdvantagesDatasource extends DataSource<any> {

  _filterChange = new BehaviorSubject('');

  constructor(private _advantages: AdvantagesLibrary,
              private _sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<AdvantageLibrary[]> {
    const displayDataChanges = [
      this._sort.sortChange,
      this._filterChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._advantages.advantages.slice();

      return this.getSortedData(this.getFilteredData(data));
    });
  }

  disconnect() {
  }

  /**
   * Get the filterstring.
   *
   * @return {string}
   */
  get filter(): string {
    return this._filterChange.value;
  }

  /**
   * Set the filter string on this datasource.
   *
   * @param {string} filter
   */
  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  private getSortedData(data: AdvantageLibrary[]): AdvantageLibrary[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'name':
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case 'reference':
          [propertyA, propertyB] = [a.reference, b.reference];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

  private getFilteredData(data: AdvantageLibrary[]): AdvantageLibrary[] {

    const filteredDataSet = data.slice().filter((advantage: AdvantageLibrary) => {
      const searchStr = (advantage.name).toLowerCase();
      return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
    });

    return filteredDataSet;
  }
}
