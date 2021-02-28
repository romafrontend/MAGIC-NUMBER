import {WidgetType} from '../types/widget';

export const fetchWidgets = (): Promise<WidgetType[]> => {
    return new Promise((resolve, reject) => {
        const tempWidgets = [
            {
              id: 111,
              name: 'Stam',
              magicNumber: 'One hundred twenty three',
              keyValuePairs: [
                {key: 1, value: 'One hundred'},
                {key: 2, value: 'twenty'},
                {key: 3, value: 'three'}
              ]   
            }
          ];

          resolve(tempWidgets);
    });
}