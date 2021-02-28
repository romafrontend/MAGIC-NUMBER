export type WidgetType = {
    id: number;
    name: string;
    magicNumber: string;
    keyValuePairs: KeyValuePair[];
  }
  
  export type NewWidgetType = {
    name: string;
    magicNumber: string;
    keyValuePairs: KeyValuePair[];
  }

  export type KeyValuePair = {
    key: number;
    value: string;
  }