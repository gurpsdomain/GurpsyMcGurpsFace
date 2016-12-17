import {Injectable} from "@angular/core";
import {Theme} from "../../models/theme";

@Injectable()
export class ThemesService  {

    private static DEFAULT: Theme = new Theme(0, "default", "Default", "default.css");
    private static DARCULA: Theme = new Theme(1, "darcula", "Darcula", "darcula.css");
    private static AVAILABLE_THEMES: Theme[] = [ThemesService.DEFAULT, ThemesService.DARCULA];
    private current: Theme;

    constructor() {
        this.current = ThemesService.DEFAULT;
        console.log("Init called from the themesService")
    }

    getDefault(): Theme {
        return ThemesService.DEFAULT;
    }

    getAvailableThemes(): Theme[] {
        return ThemesService.AVAILABLE_THEMES;
    }

    initializeThemes(): void {
        var head = document.head;

        for (let theme of ThemesService.AVAILABLE_THEMES) {
            var link: Element = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("title", theme.name);
            link.setAttribute("type", "text/css");
            link.setAttribute("href", "themes/" + theme.stylesheet);

            if (theme === this.current){
                link.disabled = false
            } else {
                link.disabled = true
            }

            head.appendChild(link);
        }
    }

    // changeStyle(theme: Theme): void {
    //     this.current = theme;
    //
    //     //Change value of the meta tag
    //     var links = document.getElementsByTagName("link");
    //     for (var i = 0; i < links.lenght; i++) {
    //         var link = links[i];
    //         if (link.getAttribute("rel").indexOf("style") != -1 && link.getAttribute("title")) {
    //             link.disabled = true;
    //             if (a.getAttribute("title") === this.style)
    //                 link.disabled = false;
    //         }
    //     }
    // }

}
