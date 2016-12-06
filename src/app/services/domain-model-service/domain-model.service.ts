import {Injectable} from "@angular/core";
import {SheetStorageService} from "./../sheet-storage-service/sheet-storage.service";

@Injectable()
export class DomainModelServiceService {

    private sheetStorageService: SheetStorageService;

    constructor(sheetStorage: SheetStorageService) {
        this.sheetStorageService = sheetStorage;
    }

}
