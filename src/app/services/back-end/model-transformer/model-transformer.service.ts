import {Injectable} from '@angular/core';
import {UpdateSheet} from '../../../models/sheet/update/update-sheet.model';
import {ReadSheet} from '../../../models/sheet/read/read-sheet.model';

@Injectable()
export class ModelTransformerService {

  /**
   * Transform an UpdateSheet into an ReadSheet
   *
   * @param  UpdateSheet
   * @return ReadSheet
   */
  public transform(updateSheet: UpdateSheet): Promise<ReadSheet> {
    const readModel: ReadSheet = new ReadSheet();
    readModel.metaData.identity.portrait = updateSheet.portrait;
    readModel.metaData.identity.name = 'Golan the Blacksword';
    readModel.metaData.playerInformation.player = 'Meron Brouwer';
    readModel.metaData.description.weight = 37;
    readModel.secondaryCharacteristics.dodge.medium = 4;
    return Promise.resolve(readModel);
  }
}
