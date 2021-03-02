export type WidgetType = {
    id: number;
    name: string;
    magicNumber: number;
    magicNumberStr: string;
    keyValuePairs: KeyValuePair[];
  }
  
  export type NewWidgetType = {
    name: string;
    magicNumber: number;
    magicNumberStr: string;
    keyValuePairs: KeyValuePair[];
  }

  export type KeyValuePair = {
    key: number;
    value: string;
  }