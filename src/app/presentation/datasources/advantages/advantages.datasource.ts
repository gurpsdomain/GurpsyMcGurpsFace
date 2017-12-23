import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AdvantagesLibrary} from '../../../models/library/advantages/advantages.model';
import {AdvantageLibrary} from '../../../models/library/advantage/advantage.model';


export class AdvantagesDatasource extends DataSource<any> {

  constructor(private advantages: AdvantagesLibrary) {
    super();
  }

  connect(): Observable<AdvantageLibrary[]> {
    return Observable.of(this.advantages.advantages);
  }

  disconnect() {
  }
}
