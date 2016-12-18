import {Injectable} from "@angular/core";
import {Theme} from "../../models/theme";

@Injectable()
export class ThemesService {

    private static DEFAULT: Theme = new Theme(0, "default", "Default", "default.css");
    private static DARCULA: Theme = new Theme(1, "darcula", "Darcula", "darcula.css");
    private static AVAILABLE_THEMES: Theme[] = [ThemesService.DEFAULT, ThemesService.DARCULA];
    private current: Theme;

    constructor() {
        this.current = ThemesService.DEFAULT;
        console.log("Init called from the themesService")
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
            var link: Element = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("title", theme.name);
            link.setAttribute("type", "text/css");
            link.setAttribute("href", "themes/" + theme.stylesheet);

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
        var links = document.getElementsByTagName("link");

        for (var i = 0; i < links.length; i++) {
            var link = links[i];

            if (this.isLinkAThemeLink(link)) {
                if (link.getAttribute("title") === theme.name) {
                    link.removeAttribute("disabled");
                } else {
                    link.setAttribute("disabled", "true");
                }
            }
        }
    }

    private isLinkAThemeLink(link: HTMLLinkElement): boolean {
        return link.getAttribute("rel") === "stylesheet" &&
            link.getAttribute("type") === "text/css" &&
            link.getAttribute("href").includes("themes/") &&
            this.getThemeTitles().indexOf(link.getAttribute("title")) != -1;
    }

    private getThemeTitles(): string[] {
        var titles: string[] = [];
        for (let theme of ThemesService.AVAILABLE_THEMES) {
            titles.push(theme.name);
        }
        return titles;
    }

}
