import {Injectable} from '@angular/core';

@Injectable()
export class ConfigurationService {

  private static GURPSY_STORAGE_KEY: string = 'gurpsy-mc-gurps-face';

  constructor() {
  }

  public getStorageKey(): string {
    return ConfigurationService.GURPSY_STORAGE_KEY;
  }

}
