import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(translate: TranslateService) {
        translate.addLangs(["en", "nl"]);
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
