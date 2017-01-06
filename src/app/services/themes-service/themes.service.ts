import {Injectable} from '@angular/core';
import {Theme} from '../../models/theme';

@Injectable()
export class ThemesService {

  private static STORAGE_KEY: string = 'gurpsy-mc-gurps-face.theme';

  private static REL: string = 'rel';
  private static STYLESHEET: string = 'stylesheet';
  private static TITLE: string = 'title';
  private static TYPE: string = 'type';
  private static MIME_TYPE: string = 'text/css';
  private static HREF: string = 'href';
  private static THEMES_ROOT: string = 'themes/';
  private static LINK: string = 'link';

  private static DEFAULT: Theme = new Theme('default', 'default.css');
  private static DARCULA: Theme = new Theme('darcula', 'darcula.css');
  private static AVAILABLE_THEMES: Theme[] = [ThemesService.DEFAULT, ThemesService.DARCULA];
  private current: Theme;

  constructor() {
    let storedThemeName: string = localStorage.getItem(ThemesService.STORAGE_KEY);

    if (storedThemeName) {
      for (let theme of ThemesService.AVAILABLE_THEMES) {
        if (theme.name === storedThemeName) {
          this.current = theme;
          break;
        }
      }
    }

    if (!this.current) {
      this.current = ThemesService.DEFAULT;
    }
  }

  getCurrent(): Promise<Theme> {
    return Promise.resolve(this.current);
  }

  setCurrent(theme: Theme): void {
    this.changeTheme(theme);
  }

  getAvailableThemes(): Promise<Theme[]> {
    return Promise.resolve(ThemesService.AVAILABLE_THEMES);
  }

  initializeThemes(): void {
    let head: HTMLHeadElement = document.head;

    for (let theme of ThemesService.AVAILABLE_THEMES) {
      let link: Element = document.createElement(ThemesService.LINK);
      link.setAttribute(ThemesService.REL, ThemesService.STYLESHEET);
      link.setAttribute(ThemesService.TITLE, theme.name);
      link.setAttribute(ThemesService.TYPE, ThemesService.MIME_TYPE);
      link.setAttribute(ThemesService.HREF, ThemesService.THEMES_ROOT + theme.stylesheet);

      if (theme === this.current) {
        link.removeAttribute('disabled');
      } else {
        link.setAttribute('disabled', 'true');
      }


      head.appendChild(link);
    }
  }


  clearSettings(): void {
    this.setDefaultTheme();
    localStorage.removeItem(ThemesService.STORAGE_KEY);
  }

  private setDefaultTheme(): void {
    this.changeTheme(ThemesService.DEFAULT);
  }

  private changeTheme(theme: Theme): void {
    this.persistTheme(theme);

    let links: NodeListOf<Element> = document.getElementsByTagName(ThemesService.LINK);

    for (let i = 0; i < links.length; i++) {
      let link: Element = links[i];

      if (this.isLinkAThemeLink(link)) {
        if (link.getAttribute(ThemesService.TITLE) === theme.name) {
          link.removeAttribute('disabled');
        } else {
          link.setAttribute('disabled', 'true');
        }
      }
    }
  }

  private isLinkAThemeLink(link: Element): boolean {
    return link.getAttribute(ThemesService.REL) === ThemesService.STYLESHEET &&
      link.getAttribute(ThemesService.TYPE) === ThemesService.MIME_TYPE &&
      link.getAttribute(ThemesService.HREF).includes(ThemesService.THEMES_ROOT) &&
      this.getThemeTitles().indexOf(link.getAttribute(ThemesService.TITLE)) !== -1;
  }

  private getThemeTitles(): string[] {
    let titles: string[] = [];
    for (let theme of ThemesService.AVAILABLE_THEMES) {
      titles.push(theme.name);
    }
    return titles;
  }

  private persistTheme(theme: Theme): void {
    this.current = theme;
    localStorage.setItem(ThemesService.STORAGE_KEY, theme.name);
  }

}
