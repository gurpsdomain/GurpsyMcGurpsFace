export class Language {
    id: number;
    label: string;
    locale: string;

    constructor(id: number, label: string, locale: string) {
        this.id = id;
        this.label = label;
        this.locale = locale;
    }
}
