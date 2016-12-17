export class Theme {
    id: number;
    label: string;
    name: string;
    stylesheet: string;

    constructor(id: number, label: string, name: string, stylesheet: string) {
        this.id = id;
        this.label = label;
        this.name = name;
        this.stylesheet = stylesheet;
    }
}
