export type WidgetType = {
    name: string;
    magicNumber: number;
    magicNumberStr: string;
    keyValuePairs: KeyValuePair[];
    id?: number;
  }

  export type KeyValuePair = {
    key: number;
    value: string;
  }