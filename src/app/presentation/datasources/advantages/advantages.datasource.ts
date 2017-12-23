import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Advantages} from '../../../models/library/advantages/advantages.model';
import {Advantage} from '../../../models/library/advantage/advantage.model';


export class AdvantagesDatasource extends DataSource<any> {

  constructor(private advantages: Advantages) {
    super();
  }

  connect(): Observable<Advantage[]> {
    return Observable.of(this.advantages.advantages);
  }

  disconnect() {
  }
}
