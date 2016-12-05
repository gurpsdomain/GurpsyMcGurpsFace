import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getCurrentLocale(): string{
    return "en";
  }

}
