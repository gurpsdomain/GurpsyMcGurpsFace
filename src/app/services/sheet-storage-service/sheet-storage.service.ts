import {Injectable} from "@angular/core";

@Injectable()
export class SheetStorageService {

    private sheetLocationRoot: string = "/assets/sheets/";
    private defaultSheets: string[] = ["dai-blackthorn.json"];

    constructor() {
    }
}
