import {SheetMap, SheetMapEntry} from './sheetmap';

export class SheetMapImpl implements SheetMap {
  public current: string;
  public sheets: SheetMapEntry[];
}

export class SheetMapEntryImpl implements SheetMapEntry {
  public name: string;
  public sheet: string;
}
