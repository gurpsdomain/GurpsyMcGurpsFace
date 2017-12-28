import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import {AdvantagesLibrary} from '../../../models/library/advantages/advantages.model';
import {AdvantageLibrary} from '../../../models/library/advantage/advantage.model';
import {MatPaginator, MatSort} from '@angular/material';


export class AdvantagesDatasource extends DataSource<any> {

  constructor(private _advantages: AdvantagesLibrary, private _paginator: MatPaginator, private _sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<AdvantageLibrary[]> {
    const displayDataChanges = [
      this._paginator.page,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._advantages.advantages.slice();

      return this.getSlicedData(this.getSortedData(data));
    });
  }

  disconnect() {
  }


  private getSlicedData(data: AdvantageLibrary[]): AdvantageLibrary[] {
    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
    return data.splice(startIndex, this._paginator.pageSize);
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

}
