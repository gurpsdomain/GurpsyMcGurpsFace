import { Injectable } from '@angular/core';
import {Theme} from "../../models/theme";

@Injectable()
export class ThemesRepositoryService {

  private DEFAULT_THEME_NAME: string = "default";
  private AVAILABLE_THEMES: Theme[] = [
    {
      "id": 0,
      "label": "Default",
      "name": "default"
    },
    {
      "id": 1,
      "label": "Darcula",
      "name": "darcula"
    }
  ];

  constructor() { }

  getDefaultTheme(): string {
    return this.DEFAULT_THEME_NAME;
  }

  getAvailableThemes(): Theme[] {
    return this.AVAILABLE_THEMES;
  }

}
