import {Injectable} from "@angular/core";
import {Theme} from "../../models/theme";

@Injectable()
export class ThemesService {

    private static REL: string = "rel";
    private static STYLESHEET: string = "stylesheet";
    private static TITLE: string = "title";
    private static TYPE: string = "type";
    private static MIME_TYPE: string = "text/css";
    private static HREF: string = "href";
    private static THEMES_ROOT: string = "themes/";
    private static LINK: string = "link";

    private static DEFAULT: Theme = new Theme(0, "default", "Default", "default.css");
    private static DARCULA: Theme = new Theme(1, "darcula", "Darcula", "darcula.css");
    private static AVAILABLE_THEMES: Theme[] = [ThemesService.DEFAULT, ThemesService.DARCULA];
    private current: Theme;

    constructor() {
        this.current = ThemesService.DEFAULT;
    }

    getDefault(): Promise<Theme> {
        return Promise.resolve(ThemesService.DEFAULT);
    }

    getCurrent(): Promise<Theme> {
        return Promise.resolve(this.getDefault());
    }

    setCurrent(theme: Theme): void {
        this.changeTheme(theme);
    }

    getAvailableThemes(): Promise<Theme[]> {
        return Promise.resolve(ThemesService.AVAILABLE_THEMES);
    }

    initializeThemes(): void {
        var head = document.head;

        for (let theme of ThemesService.AVAILABLE_THEMES) {
            var link: Element = document.createElement(ThemesService.LINK);
            link.setAttribute(ThemesService.REL, ThemesService.STYLESHEET);
            link.setAttribute(ThemesService.TITLE, theme.name);
            link.setAttribute(ThemesService.TYPE, ThemesService.MIME_TYPE);
            link.setAttribute(ThemesService.HREF, ThemesService.THEMES_ROOT + theme.stylesheet);

            if (theme === this.current) {
                link.removeAttribute("disabled");
            } else {
                link.setAttribute("disabled", "true");
            }

            head.appendChild(link);
        }
    }



    private changeTheme(theme: Theme): void {
        this.current = theme;

        //Change value of the meta tag
        var links = document.getElementsByTagName(ThemesService.LINK);

        for (var i = 0; i < links.length; i++) {
            var link = links[i];

            if (this.isLinkAThemeLink(link)) {
                if (link.getAttribute(ThemesService.TITLE) === theme.name) {
                    link.removeAttribute("disabled");
                } else {
                    link.setAttribute("disabled", "true");
                }
            }
        }
    }

    private isLinkAThemeLink(link: Element): boolean {
        return link.getAttribute(ThemesService.REL) === ThemesService.STYLESHEET &&
            link.getAttribute(ThemesService.TYPE) === ThemesService.MIME_TYPE &&
            link.getAttribute(ThemesService.HREF).includes(ThemesService.THEMES_ROOT) &&
            this.getThemeTitles().indexOf(link.getAttribute(ThemesService.TITLE)) != -1;
    }

    private getThemeTitles(): string[] {
        var titles: string[] = [];
        for (let theme of ThemesService.AVAILABLE_THEMES) {
            titles.push(theme.name);
        }
        return titles;
    }

}
