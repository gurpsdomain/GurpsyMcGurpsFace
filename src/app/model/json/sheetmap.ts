export interface SheetMapEntry {
  name: string;
  sheet: string;
}

export interface SheetMap {
  current: string;
  sheets: SheetMapEntry[];
}

